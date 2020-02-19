<?php

$entity_feed = entity_load('feeds_feed', 19);
$entity_feed->set('source', 'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/b92baa3c-b9c8-488c-aa9e-aafd001cbf66/12abbc3c-ae53-487a-b83b-aafd001cbf79/podcast.rss');
$entity_feed->save();
