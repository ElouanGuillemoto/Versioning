Règles :

Bloquer les pushs directs sur main

Empêche qu’un développeur pousse du code non relu directement sur la branche principale.
Importance :

Évite d’introduire des bugs critiques en production.

Force l’utilisation des Pull Requests → meilleure visibilité sur tous les changements.

Permet un historique plus propre et mieux structuré.

Require pull request before merging

Oblige à ouvrir une Pull Request pour fusionner du code dans main.
Importance :

Permet la revue de code (même en solo, tu t’imposes de relire).

Permet aux outils d’analyse et de test de s’exécuter systématiquement.

Rend les modifications traçables (discussion, justification, changelog).

Require approvals
Importance :

Peut évoluer vers de "vraies" revues à plusieurs développeurs.

Renforce la discipline de ne rien merger sans validation.

Dismiss stale pull request approvals when new commits are pushed

Révoque automatiquement les approbations lorsque quelqu’un pousse de nouveaux commits sur la PR.
Importance :

Empêche de fusionner du code modifié qui n’a pas été revu.

Garantit que l’approbation porte bien sur l’état final de la PR.

Require status checks to pass before merging
La PR ne peut être fusionnée que lorsque les checks (CI) sont verts.
Importance :

Empêche de merger du code cassé ou non conforme.

Renforce la fiabilité du projet (tests + qualité du code systématiquement validés).

Required status checks :
• code-quality (lint + format)

Garantit que le code respecte les standards ESLint et Prettier.
Importance :

Style cohérent dans toute la base de code.

Moins de diffs inutiles et conflits.

Prévention d’erreurs simples (variables non utilisées, typos, etc.).

• tests

Exécute ta suite Jest sur chaque PR.
Importance :

Garantit que les comportements critiques continuent de fonctionner.

Empêche l’introduction de régressions.

Améliore la confiance dans le code
