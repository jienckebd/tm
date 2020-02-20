<?php

namespace Drupal\vud\Plugin;

use Drupal\Component\Plugin\PluginBase;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\Url;
use Drupal\votingapi\VoteResultFunctionManager;

/**
 * Defines a plugin base implementation that corresponding plugins will extend.
 */
abstract class VoteUpDownWidgetBase extends PluginBase implements VoteUpDownWidgetInterface {

  use StringTranslationTrait;

  /**
   * {@inheritdoc}
   */
  public function getWidgetId() {
    return $this->getPluginDefinition()['id'];
  }

  /**
   * {@inheritdoc}
   */
  public function getWidgetTemplate() {
    return $this->getPluginDefinition()['widget_template'];
  }

  /**
   * {@inheritdoc}
   */
  public function alterTemplateVariables(&$variables) {
    $criteria = [];
    $criteria['entity_id'] = $variables['entity_id'];
    $criteria['entity_type'] = $variables['type'];
    $criteria['value_type'] =  \Drupal::config('vud.settings')->get('tag', 'vote');;

    $voteResultManager = \Drupal::service('plugin.manager.votingapi.resultfunction');

    // TODO: Implement votingAPI result functions instead of custom queries
  }

  /**
   * {@inheritdoc}
   */
  public function getWidgetTemplateVars($base_path, $widget_template, &$variables) {
    $variables['#template_path'] = $base_path . '/widgets/' . $widget_template . '/widget.html.twig';
    array_push($variables['#attached']['library'], 'vud/' . $this->getWidgetId());
    return $variables;
  }

  /**
   * {@inheritdoc}
   */
  public function build($entity) {

    $route_match = \Drupal::routeMatch();
    $route_params = $route_match->getParameters();

    $context_entity_type = $route_params->get('context_entity_type');
    $context_entity_id = $route_params->get('context_entity_id');

    if (!$context_entity_type || !$context_entity_id) {
      $node = $route_params->get('node');
      if (!empty($node)) {
        $context_entity_id = $node->id();
        $context_entity_type = 'node';
      }
    }

    if (!$context_entity_type || !$context_entity_id) {
      $request = \Drupal::request();
      $context_entity_type = $request->request->get('context_entity_type');
      $context_entity_id = $request->request->get('context_entity_id');
    }

    $vote_storage = \Drupal::service('entity.manager')->getStorage('vote');

    $currentUser =  \Drupal::currentUser();

    $entityTypeId = $entity->getEntityTypeId();
    $entityId = $entity->id();

    $module_handler = \Drupal::service('module_handler');
    $module_path = $module_handler->getModule('vud')->getPath();

    if ($context_entity_type && $context_entity_id) {
      $up_points = \Drupal::entityQuery('vote')
        ->condition('value', 1)
        ->condition('entity_type', $entityTypeId)
        ->condition('entity_id', $entityId)
        ->condition('context_entity_type', $context_entity_type)
        ->condition('context_entity_id', $context_entity_id)
        ->count()
        ->execute();
      $down_points = \Drupal::entityQuery('vote')
        ->condition('value', -1)
        ->condition('entity_type', $entityTypeId)
        ->condition('entity_id', $entityId)
        ->condition('context_entity_type', $context_entity_type)
        ->condition('context_entity_id', $context_entity_id)
        ->count()
        ->execute();
    }
    else {
      $up_points = \Drupal::entityQuery('vote')
        ->condition('value', 1)
        ->condition('entity_type', $entityTypeId)
        ->condition('entity_id', $entityId)
        ->count()
        ->execute();
      $down_points = \Drupal::entityQuery('vote')
        ->condition('value', -1)
        ->condition('entity_type', $entityTypeId)
        ->condition('entity_id', $entityId)
        ->count()
        ->execute();
    }

    $points = $up_points - $down_points;
    $unsigned_points = $up_points + $down_points;

    $widgetTemplateId = $this->getWidgetId();

    $variables = [
      '#theme' => 'vud_widget',
      '#widget_template' => $widgetTemplateId,
      '#entity_id' => $entityId,
      '#entity_type_id' => $entityTypeId,
      '#base_path' => $module_path,
      '#widget_name' => $widgetTemplateId,
      '#up_points' => $up_points,
      '#down_points' => $down_points,
      '#points' => $points,
      '#unsigned_points' => $unsigned_points,
      '#vote_label' => 'votes',
      '#attached' => [
        'library' => [
          'vud/ajax',
          'vud/common',
        ]
      ],
    ];

    $this->getWidgetTemplateVars($module_path, $widgetTemplateId, $variables);

    $variables['#attached']['drupalSettings']['points'] = $points;

    if(vud_can_vote($currentUser)){
      $vote_type = \Drupal::config('vud.settings')->get('tag', 'vote');
      $user_votes_current_entity = $vote_storage->getUserVotes(
        $currentUser->id(),
        $vote_type,
        $entityTypeId,
        $entityId,
        NULL,
        $context_entity_type,
        $context_entity_id
      );

      if ($context_entity_type && $context_entity_id) {
        $variables += [
          '#link_up' => Url::fromRoute('vud.vote.context', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
            'context_entity_type' => $context_entity_type,
            'context_entity_id' => $context_entity_id,
            'vote_value' => 1,
          ]),
          '#link_down' => Url::fromRoute('vud.vote.context', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
            'context_entity_type' => $context_entity_type,
            'context_entity_id' => $context_entity_id,
            'vote_value' => -1,
          ]),
          '#link_reset' => Url::fromRoute('vud.reset.context', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
            'context_entity_type' => $context_entity_type,
            'context_entity_id' => $context_entity_id,
          ]),
          '#show_reset' => TRUE,
          '#reset_long_text' => t('Reset your vote'),
          '#reset_short_text' => t('(reset)'),
          '#link_class_reset' => 'reset element-invisible',
        ];
      }
      else {
        $variables += [
          '#link_up' => Url::fromRoute('vud.vote', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
            'vote_value' => 1,
          ]),
          '#link_down' => Url::fromRoute('vud.vote', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
            'vote_value' => -1,
          ]),
          '#link_reset' => Url::fromRoute('vud.reset', [
            'entity_type_id' => $entityTypeId,
            'entity_id' => $entityId,
          ]),
          '#show_reset' => TRUE,
          '#reset_long_text' => t('Reset your vote'),
          '#reset_short_text' => t('(reset)'),
          '#link_class_reset' => 'reset element-invisible',
        ];
      }

      if($user_votes_current_entity != NULL){
        $user_vote_id = (int)array_values($user_votes_current_entity)[0];
        $user_vote = $vote_storage->load($user_vote_id)->getValue();

        if($user_vote != 0) {
          $variables['#attached']['drupalSettings']['uservote'] = $user_vote;

          if($user_vote == 1){
            $variables['#link_class_up'] = 'up active';
            $variables['#link_class_down'] = 'down inactive';
            $variables['#class_up'] = 'up active';
            $variables['#class_down'] = 'down inactive';
          }
          elseif($user_vote == -1){
            $variables['#link_class_up'] = 'up inactive';
            $variables['#link_class_down'] = 'down active';
            $variables['#class_up'] = 'up inactive';
            $variables['#class_down'] = 'down active';
          }
          $variables['#link_class_reset'] = 'reset';
        }
      }
      else{
        $variables['#link_class_up'] = 'up inactive';
        $variables['#link_class_down'] = 'down inactive';
        $variables['#class_up'] = 'up inactive';
        $variables['#class_down'] = 'down inactive';
      }
    }

    $variables['#link_class_up'] .= ' use-ajax ajax--wrapper';
    $variables['#link_class_down'] .= ' use-ajax ajax--wrapper';
    $variables['#link_class_reset'] .= ' use-ajax ajax--wrapper';

    $variables['#id'] = VoteUpDownWidgetManager::widgetWrapperId($entityTypeId, $entityId, $context_entity_type, $context_entity_id);

    return $variables;
  }

}
