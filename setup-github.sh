#!/bin/bash
# ============================================================
# Script de configuration du déploiement automatique GitHub
# ============================================================

echo "🚀 Configuration du déploiement automatique Firebase"
echo ""

# 1. Créer le repo GitHub
echo "📁 Étape 1 : Créer un repository sur GitHub"
echo "   → Allez sur https://github.com/new"
echo "   → Nom : rendez-vous-romantique"
echo "   → Visibilité : Public ou Private"
echo "   → NE PAS cocher 'Add a README'"
echo "   → Cliquer 'Create repository'"
echo ""
read -p "Appuyez sur Entrée quand le repo est créé..."

# 2. Pousser le code
echo "📤 Étape 2 : Pousser le code sur GitHub"
git remote add origin https://github.com/VOTRE_USERNAME/rendez-vous-romantique.git 2>/dev/null || git remote set-url origin https://github.com/VOTRE_USERNAME/rendez-vous-romantique.git
git branch -M main
git push -u origin main
echo "   ✅ Code poussé !"
echo ""

# 3. Configurer le service account Firebase
echo "🔑 Étape 3 : Configurer le service account Firebase"
echo "   → Allez sur https://console.firebase.google.com/project/rendez-vous-romantique/settings/iam"
echo "   → Cliquer 'Add' ou 'Create Service Account'"
echo "   → Nom : github-actions"
echo "   → Description : GitHub Actions Deploy"
echo "   → Créer et continuer"
echo "   → Rôle : Firebase Hosting Admin"
echo "   → Done"
echo "   → Cliquer sur le compte de service créé"
echo "   → Onglet 'Keys' → 'Add Key' → 'Create new key' → JSON"
echo "   → Télécharger le fichier JSON"
echo ""

# 4. Ajouter les secrets GitHub
echo "🔐 Étape 4 : Ajouter les secrets GitHub"
echo "   → Allez sur https://github.com/VOTRE_USERNAME/rendez-vous-romantique/settings/secrets/actions"
echo "   → Ajouter 'FIREBASE_SERVICE_ACCOUNT' avec le CONTENU du fichier JSON"
echo "   → Ajouter 'FIREBASE_PROJECT_ID' avec la valeur : rendez-vous-romantique"
echo ""
echo "✅ Terminé ! À chaque push sur 'main', le site sera automatiquement déployé."
