# ENTRE NOUS — Pour Malissia

Site statique multipage en HTML, CSS et JavaScript, prêt pour GitHub Pages.

## Pages
- `index.html` : accueil
- `histoire.html` : votre histoire, sans dates ni événements inventés
- `coeur.html` : lettre personnelle
- `surprise.html` : enveloppe interactive
- `suite.html` : conclusion tournée vers l'avenir

La page « Nos souvenirs » / galerie n'est volontairement pas incluse.

## Tester sur ordinateur
Ouvrir `index.html` dans un navigateur. Pour un test local plus fiable, lancer un serveur statique depuis ce dossier :
`python -m http.server 8000`
Puis ouvrir `http://localhost:8000`.

## Publier sur GitHub Pages
1. Créer un dépôt GitHub.
2. Envoyer tous les fichiers et dossiers de cette archive à la racine du dépôt.
3. Dans **Settings → Pages**, choisir **Deploy from a branch**.
4. Choisir la branche `main` et le dossier `/ (root)`, puis enregistrer.
5. Attendre la publication indiquée par GitHub Pages.

## Personnalisation
Les textes sont directement dans les fichiers HTML. Les couleurs et les mises en page sont dans `css/style.css`.
Aucune dépendance JavaScript n'est nécessaire. Les polices Google sont facultatives : en cas d'absence de connexion, des polices de remplacement sont utilisées.
