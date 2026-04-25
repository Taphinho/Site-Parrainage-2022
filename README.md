# 🎓 Site Parrainage 2022 — DGI 2023

Site web statique conçu pour organiser l'événement de **parrainage de la promotion DUT Informatique / Télécoms & Réseaux** de 2022-2023. Il permet aux étudiants DUT1 de s'inscrire, aux parrains DUT2 de créer leur profil, et diffuse l'annonce officielle de la soirée.

> L'événement de parrainage était prévu le **Lundi 9 Janvier 2023 à 20h au Petit Amphi**.

---

## ✨ Fonctionnalités

Le site est composé de **5 pages** :

| Page | Fichier | Description |
|---|---|---|
| 🏠 Accueil | `index.html` | Portail de navigation vers toutes les pages |
| 🔐 Connexion | `connexion.html` | Authentification par numéro de téléphone et mot de passe |
| 👤 Profil | `home.html` | Affichage du profil parrain (photo, nom, téléphone, niveau) |
| 📋 Inscription DUT1 | `inscriptionDUT1.html` | Formulaire d'inscription pour les filleuls (DUT1) |
| 📋 Inscription DUT2 | `inscriptionDUT2.html` | Formulaire d'inscription pour les parrains (DUT2) |
| 📢 Annonce | `annonce.html` | Message d'annonce de la soirée de parrainage avec effet typo animé |
| 🎲 Aléatoire | `random.html` | Page supplémentaire (tirage ou matching aléatoire) |

### Formulaire d'inscription (DUT1 & DUT2)
- **Photo de profil** — upload d'avatar avec aperçu instantané
- **Prénom & Nom**
- **Numéro de téléphone** (utilisé comme identifiant de connexion)
- **Mot de passe**
- **Filière** — choix entre Informatique ou Télécoms & Réseaux
- **Sexe**
- Effet sonore au moment de la soumission (`bey.wav`) 🔊

### Design
- Fond animé avec **particules interactives** (particles.js)
- Thème sombre avec accents **bleu ciel** (`sky-400`)
- Cartes de profil avec **avatar circulaire** flottant au-dessus
- **Effet machine à écrire** (CSS typing) sur la page d'annonce
- Interface **responsive** adaptée aux écrans mobiles (breakpoints `max-[414px]`, `max-[515px]`)

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| **HTML5** | Structure des pages |
| **Tailwind CSS** | Styles utilitaires (compilé dans `styleOutput.css`) |
| **Font Awesome** | Icônes (téléphone, cadenas, signature, Mars & Vénus…) |
| **particles.js** | Animation de fond (particules flottantes) |
| **JavaScript vanilla** | Logique de connexion, popup, prévisualisation avatar |
| **Web Fonts** | Polices personnalisées (dossier `webfonts/`) |

---

## 📂 Structure du projet

```
Site-Parrainage-2022/
│
├── index.html              # Page d'accueil / portail
├── connexion.html          # Page de connexion
├── home.html               # Profil connecté (parrain/filleul)
├── inscriptionDUT1.html    # Inscription filleul (DUT1)
├── inscriptionDUT2.html    # Inscription parrain (DUT2)
├── annonce.html            # Annonce de la soirée
├── random.html             # Tirage / matching aléatoire
├── chat.jpg                # Image de fond ou illustration
│
├── style/
│   ├── styleOutput.css     # CSS compilé depuis Tailwind
│   ├── all.css             # Font Awesome & styles globaux
│   └── js.css              # Styles pour animations JS
│
├── js/
│   ├── app.js              # Logique principale (connexion, navigation)
│   ├── script.js           # Scripts de formulaires
│   ├── popup.js            # Gestion du popup (alerte photo manquante)
│   ├── particles.js        # Librairie particles.js
│   └── particlesjs.config.json  # Configuration des particules
│
├── audio/
│   └── bey.wav             # Son joué à la soumission du formulaire
│
├── image/
│   ├── avatar.png          # Avatar par défaut
│   └── avatarcat.jpg       # Avatar alternatif
│
├── webfonts/               # Polices personnalisées (Font Awesome)
└── tailwind.config.js      # Configuration Tailwind CSS
```

---

## 🚀 Lancement

C'est un site **entièrement statique** — aucun backend ni installation nécessaire.

```bash
# Cloner le dépôt
git clone https://github.com/Taphinho/Site-Parrainage-2022.git
cd Site-Parrainage-2022

# Ouvrir directement dans le navigateur
open index.html
```

Ou simplement double-cliquer sur `index.html` dans votre explorateur de fichiers.

> ⚠️ Pour que particles.js charge correctement sa configuration JSON, il est préférable de servir le site via un serveur local (les navigateurs bloquent les requêtes `fetch` sur des fichiers locaux) :
> ```bash
> # Avec Python
> python -m http.server 8000
> # Puis ouvrir http://localhost:8000
> ```

---


## 👤 Auteur

**Moustapha Madiop Niang (Taphinho)**  
GitHub : [Taphinho](https://github.com/Taphinho)

---

