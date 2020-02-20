<?php
namespace Kadet\XmlSerializer;

/**
 * Interface XmlSerializable
 *
 * Allows to implement own xml serialization mechanism for class.
 *
 * @package Kadet\XmlSerializer
 */
interface XmlSerializable
{
    /**
     * Serializes object to XML node.
     *
     * @param \DOMElement   $node       Node to fill with serialized data.
     * @param XmlSerializer $serializer XML serializer instance.
     *
     * @return \DOMElement Serialized node.
     */
    public function toXml(\DOMElement $node, XmlSerializer $serializer);

    /**
     * Deserializes object from XML node.
     *
     * @param \DOMElement     $node         Node to deserialize.
     * @param XmlDeserializer $deserializer Xml Deserializer instance.
     *
     * @return mixed Deserialized object.
     */
    public static function fromXml(\DOMElement $node, XmlDeserializer $deserializer);
} 