<?php
/**
 * Copyright (C) 2014, Some right reserved.
 * @author  Kacper "Kadet" Donat <kadet1090@gmail.com>
 * @license http://creativecommons.org/licenses/by-sa/4.0/legalcode CC BY-SA
 *
 * Contact with author:
 * Xmpp: kadet@jid.pl
 * E-mail: kadet1090@gmail.com
 *
 * From Kadet with love.
 */

namespace Kadet\XmlSerializer;

require_once 'functions.php';

class XmlSerializer
{
    /**
     * @var \DOMDocument
     */
    private $_document;

    /**
     * Default DAO for serialized objects.
     *
     * @var string
     */
    public $dao = 'stdClass';

    public function __construct()
    {
        $this->_document               = new \DOMDocument();
        $this->_document->formatOutput = true;
        $this->_document->encoding     = 'utf-8';
    }

    /**
     * Serializes object.
     *
     * @param object      $var
     * @param \DOMElement $node
     *
     * @return \DOMElement
     */
    private function _serializeObject($var, \DOMElement &$node)
    {
        if (is_subclass_of($var, 'Kadet\\XmlSerializer\\XmlSerializable'))
            return $var->toXml($node, $this);

        $reflection = new \ReflectionObject($var);
        foreach ($reflection->getProperties() as $property) {
            $property->setAccessible(true);
            $annotations = getAnnotations($property->getDocComment());

            if (isset($annotations['xml-skip'])) continue;

            $value = $property->getValue($var);

            if (isset($annotations['xml-attrib'])) {
                $name = !empty($annotations['xml-attrib']) ? $annotations['xml-attrib'] : $property->getName();
                $node->setAttribute($name, is_array($value) || is_object($value) ? serialize($value) : $value);
            } else {
                $name    = !empty($annotations['xml-tag']) ? $annotations['xml-tag'] : $property->getName();
                $element = $this->_document->createElement($name);
                $node->appendChild($this->serializeElement($value, $element));
            }

            if (!$property->isPublic()) $property->setAccessible(false);
        }

        return $node;
    }

    /**
     * Serializes object to specified element.
     *
     * @param mixed       $var
     * @param \DOMElement $node
     *
     * @return \DOMElement
     */
    public function serializeElement($var, \DOMElement &$node)
    {
        switch (gettype($var)) {
            case 'object':
                $node = $this->_serializeObject($var, $node);
                if (get_class($var) != $this->dao)
                    $node->setAttribute('s:type', htmlspecialchars(get_class($var)));
                break;
            case 'array':
                $node->setAttribute('s:type', 'array');
                $node = $this->_serializeArray($var, $node);
                break;
            default:
                $node = $this->_serializeVar($var, $node);
                break;
        }

        return $node;
    }

    /**
     * Serializes object.
     *
     * @param mixed  $var Object to serialize.
     * @param string $tag XML Tag for root.
     *
     * @return string XML string with serialized object.
     */
    public function serialize($var, $tag = null)
    {
        if (isset($this->_document->documentElement))
            $this->_document->removeChild($this->_document->documentElement);
        $element = $this->_document->createElement(empty($tag) ? $this->_getTag($var) : $tag);
        $this->_document->appendChild($this->serializeElement($var, $element));
        $this->_document->documentElement->setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:s', 'urn:kadet:serializer');

        if ($this->dao != 'stdClass')
            $this->_document->documentElement->setAttribute('s:dao', $this->dao);

        return $this->_document->saveXML();
    }

    /**
     * Gets tag for variable.
     *
     * @param mixed $var Variable to determine tag.
     *
     * @return string Xml Tag.
     */
    private function _getTag($var)
    {
        if (!is_object($var)) return gettype($var);

        $reflection  = new \ReflectionObject($var);
        $annotations = getAnnotations($reflection->getDocComment());

        if (isset($annotations['xml-tag']))
            return $annotations['xml-tag'];
        else
            return basename(get_class($var));
    }

    /**
     * Serializes array to xml element.
     *
     * @param array       $array Array to serialize.
     * @param \DOMElement $node  Xml node.
     *
     * @return \DOMElement
     */
    private function _serializeArray(array $array, \DOMElement &$node)
    {
        foreach ($array as $key => $value) {
            $element = $node->ownerDocument->createElement('element');
            $element->setAttribute('s:key', $key);
            $node->appendChild($this->serializeElement($value, $element));
        }

        return $node;
    }

    /**
     * Serializes scalar to xml node.
     *
     * @param mixed       $var     Scalar to serialize.
     * @param \DOMElement $element Xml node.
     *
     * @return \DOMElement
     */
    private function _serializeVar($var, \DOMElement &$element)
    {
        if(is_bool($var))
            $element->nodeValue = $var ? 'true' : 'false';
        else
            $element->nodeValue = (string)$var;

        return $element;
    }
} 