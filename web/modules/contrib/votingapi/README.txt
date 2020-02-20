The Basics
==========
VotingAPI is a framework for content voting and rating systems in Drupal. It does not directly provide any voting 'features' to users -- instead, it offers a consistent API for other module developers to build their voting and rating systems on top of. If you're an end user who just wants to rate nodes, check out some of the modules that use VotingAPI's framework:

Fivestar
UserReview
Vote-Up-Down
LoveHate
Node Moderation

... and more.

If you're a developer who wants to build a voting or rating related module, check out API.txt in the VotingAPI directory.

Installation
============
Installing VotingAPI is pretty straightforward. Just copy the VotingAPI directory into your web site's /modules directory. Then, activate the module by visiting http://www.example.com/admin/modules, where example.com is the URL of your web site.

Vote result views integration
============
To relate entities in views to their vote results, each entity type is given a "@entity_type vote result" relationship that will relate the entities to their calculated vote results. This allows you to add sorting, filtering, etc. based on vote results.

Passing entity context through views currently requires that the context_entity_id is passed to the view as a contextual argument. The relationship form provides configuration to enter the context_entity_type and the argument ID to be used for the context_entity_id.

Requirements
============
VotingAPI requires Drupal 4.7 or later.
