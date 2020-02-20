<?php

namespace Drupal\votingapi\Plugin\views\relationship;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\PageCache\ResponsePolicy\KillSwitch;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Url;
use Drupal\user\RoleInterface;
use Drupal\views\Plugin\views\relationship\RelationshipPluginBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a views relationship to select flag content by a flag.
 *
 * @ViewsRelationship("vote_result")
 */
class VoteResult extends RelationshipPluginBase {
  /**
   * {@inheritdoc}
   */
  public function defineOptions() {
    $options = parent::defineOptions();
    $options['vote_type'] = ['default' => NULL];
    $options['vote_function'] = ['default' => NULL];
    $options['context_entity_type'] = ['default' => NULL];
    $options['context_entity_id_arg'] = ['default' => NULL];
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    $entity_type_manager = \Drupal::entityTypeManager();

    $vote_types = $entity_type_manager
      ->getStorage('vote_type')->loadMultiple();

    $options_vote_type = [];

    foreach ($vote_types as $vote_type) {
      $options_vote_type[$vote_type->id()] = $vote_type->label();
    }

    $form['vote_type'] = [
      '#type' => 'radios',
      '#title' => $this->t('Vote Type'),
      '#options' => $options_vote_type,
      '#default_value' => $this->options['vote_type'],
      '#required' => TRUE,
    ];

    $vote_function_manager = \Drupal::service('plugin.manager.votingapi.resultfunction');

    $options_vote_function = [];
    foreach ($vote_function_manager->getDefinitions() as $vote_function) {
      $options_vote_function[$vote_function['id']] = $vote_function['label'];
    }

    $form['vote_function'] = [
      '#type' => 'radios',
      '#title' => $this->t('Vote Function'),
      '#options' => $options_vote_function,
      '#default_value' => $this->options['vote_function'],
      '#required' => TRUE,
    ];

    $form['context_entity_type'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Context Entity Type'),
      '#default_value' => $this->options['context_entity_type'],
    ];

    $form['context_entity_id_arg'] = [
      '#type' => 'number',
      '#title' => $this->t('Context Entity ID Argument'),
      '#description' => $this->t('Decide which view argument will be passed as the context entity ID.'),
      '#default_value' => $this->options['context_entity_id_arg'],
    ];

  }

  /**
   * {@inheritdoc}
   */
  public function query() {

    if ($this->options['vote_type']) {
      $this->definition['extra'][] = [
        'field' => 'type',
        'value' => $this->options['vote_type'],
      ];
    }

    if ($this->options['vote_function']) {
      $this->definition['extra'][] = [
        'field' => 'function',
        'value' => $this->options['vote_function'],
      ];
    }

    if ($this->options['context_entity_type']) {
      $this->definition['extra'][] = [
        'field' => 'context_entity_type',
        'value' => $this->options['context_entity_type'],
      ];

      $context_entity_id_arg = $this->view->argument['nid']->getValue();
      if (!empty($context_entity_id_arg)) {
        $this->definition['extra'][] = [
          'field' => 'context_entity_id',
          'value' => $context_entity_id_arg,
        ];
      }
    }

    parent::query();
  }

}
