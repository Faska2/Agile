const translations = {
    fr: {
        title: "Guide de Révision Technique",
        subtitle: "Méthodes Agile, Scrum, Jira, Git, GitHub et DevOps",
        tocTitle: "Table des Matières",
        footer: "Faska Elouaaziki Version",
        rights: "© 2026 Tous droits réservés.",
        nav: {
            agile: "Méthodes Agile et Scrum",
            jira: "Jira",
            git: "Git et GitHub",
            devops: "DevOps"
        },
        sections: {
            agile: "Méthodes Agile et Scrum",
            jira: "Jira",
            git: "Git et GitHub",
            devops: "DevOps"
        },
        qa: {
            q1: "Q1 : Quels sont les inconvénients des méthodes prévisibles : Cascade, Y et V ?",
            a1: "Les inconvénients des méthodes prévisibles (Waterfall/Cascade, Y, V) sont :",
            l1_1: "Manque de flexibilité : difficile de modifier les exigences une fois le développement commencé",
            l1_2: "Livraison tardive du produit fonctionnel : le client ne voit le résultat qu'à la fin",
            l1_3: "Risque élevé : si une erreur est détectée tardivement, elle est coûteuse à corriger",
            l1_4: "Communication limitée avec le client pendant le développement",
            l1_5: "Adaptation difficile aux changements technologiques ou de marché",

            q2: "Q2 : Quels sont les avantages des méthodes agiles ?",
            a2: "Les avantages des méthodes agiles sont :",
            l2_1: "Flexibilité et adaptabilité aux changements",
            l2_2: "Livraisons fréquentes et incrémentales de fonctionnalités",
            l2_3: "Collaboration étroite avec le client et les parties prenantes",
            l2_4: "Réduction des risques grâce aux retours rapides",
            l2_5: "Amélioration continue du processus et du produit",
            l2_6: "Équipes auto-organisées et autonomes",
            l2_7: "Satisfaction client accrue",

            q3: "Q3 : Définir la méthode Agile",
            a3: "La méthode Agile est une approche de gestion de projet et de développement de logiciel qui met l'accent sur la flexibilité, la collaboration client, la livraison rapide de valeur et l'adaptation aux changements. Elle repose sur 4 valeurs fondamentales :",
            l3_1: "Les individus et leurs interactions plus que les processus et les outils",
            l3_2: "Des logiciels fonctionnels plus qu'une documentation exhaustive",
            l3_3: "La collaboration avec les clients plus que la négociation contractuelle",
            l3_4: "L'adaptation au changement plus que le suivi d'un plan",

            q4: "Q4 : Définir un sprint",
            a4: "Un sprint est une période de temps fixe (généralement de 1 à 4 semaines) pendant laquelle l'équipe Scrum travaille pour accomplir un ensemble de travail défini et convenu. À la fin de chaque sprint, l'équipe devrait avoir livré un incrément de produit potentiellement livrable.",

            q5: "Q5 : Quelles sont les rôles dans Scrum ?",
            a5: "Les rôles dans Scrum sont :",
            l5_1: "<strong>Product Owner :</strong> Responsable de maximiser la valeur du produit, gère le Product Backlog",
            l5_2: "<strong>Scrum Master :</strong> Facilitateur qui s'assure que l'équipe suit les principes et pratiques Scrum",
            l5_3: "<strong>Équipe de développement :</strong> Groupe de professionnels qui réalisent le travail",
            l5_4: "<strong>Les parties prenantes :</strong> Personnes intéressées par le produit mais ne faisant pas directement partie de l'équipe Scrum",

            q6: "Q6 : Quel est le rôle de Scrum Master ?",
            a6: "Le Scrum Master est un servant-leader qui :",
            l6_1: "Facilite les événements Scrum",
            l6_2: "Élimine les obstacles qui gênent l'équipe",
            l6_3: "Coache l'équipe dans les pratiques Scrum",
            l6_4: "Protège l'équipe des distractions externes",
            l6_5: "Aide à l'amélioration continue",
            l6_6: "S'assure que l'équipe reste productive et focalisée",

            q7: "Q7 : Quelles sont les événements (étapes) dans Scrum ?",
            a7: "Les événements Scrum sont :",
            l7_1: "<strong>Sprint Planning :</strong> Planification du travail à réaliser pendant le sprint",
            l7_2: "<strong>Daily Scrum :</strong> Réunion quotidienne de 15 minutes pour synchroniser l'équipe",
            l7_3: "<strong>Sprint Review :</strong> Présentation du travail accompli aux parties prenantes",
            l7_4: "<strong>Sprint Retrospective :</strong> Réflexion sur le processus pour s'améliorer",
            l7_5: "<strong>Le Sprint lui-même :</strong> La période de temps pour réaliser le travail",

            q8: "Q8 : Quels sont les 3 Artéfacts (produits) Scrum ?",
            a8: "Les 3 artefacts Scrum sont :",
            l8_1: "<strong>Product Backlog :</strong> Liste priorisée de tout ce qui pourrait être nécessaire au produit",
            l8_2: "<strong>Sprint Backlog :</strong> Ensemble des éléments du Product Backlog sélectionnés pour un sprint",
            l8_3: "<strong>Incrément de produit :</strong> Somme de tous les éléments du Product Backlog terminés jusqu'à présent",

            q9: "Q9 : Donner des exemples de User Stories",
            a9: "Exemples de User Stories :",
            l9_1: "\"En tant qu'utilisateur, je veux pouvoir me connecter avec mon email et mon mot de passe pour accéder à mon compte\"",
            l9_2: "\"En tant qu'administrateur, je veux pouvoir exporter les données des utilisateurs au format CSV pour les analyser\"",
            l9_3: "\"En tant que client, je veux pouvoir suivre ma commande en temps réel pour savoir quand elle sera livrée\"",
            l9_4: "\"En tant qu'acheteur, je veux pouvoir ajouter des articles à mon panier pour les acheter plus tard\"",

            q10: "Q10 : Quel est le but de Jira ?",
            a10: "Jira est une plateforme de gestion de projet et de suivi des problèmes développée par Atlassian. Elle permet de :",
            l10_1: "Planifier, suivre et gérer les projets agiles",
            l10_2: "Organiser le travail en sprints et backlogs",
            l10_3: "Suivre les bugs et les tâches",
            l10_4: "Collaborer en équipe",
            l10_5: "Générer des rapports sur l'avancement des projets",

            q11: "Q11 : Définir : ticket, Epic, story, tâche, bug, BackLog",
            l11_1: "<strong>Ticket :</strong> Élément de travail dans Jira qui représente une tâche, un bug, une histoire, etc.",
            l11_2: "<strong>Epic (Épopée) :</strong> Gros travail qui peut être décomposé en plusieurs stories ou tâches plus petites",
            l11_3: "<strong>Story :</strong> Fonctionnalité du point de vue de l'utilisateur, généralement formulée comme une User Story",
            l11_4: "<strong>Tâche :</strong> Travail technique à réaliser pour compléter une story",
            l11_5: "<strong>Bug :</strong> Erreur ou problème dans le code qui doit être corrigé",
            l11_6: "<strong>BackLog :</strong> Liste priorisée de tout le travail à réaliser dans un projet",

            q12: "Q12 : Quels sont les types de ticket ?",
            a12: "Les types de ticket courants dans Jira sont :",
            l12_1: "<strong>Tâche (Task) :</strong> Action technique à réaliser",
            l12_2: "<strong>Bug :</strong> Erreur à corriger",
            l12_3: "<strong>Story :</strong> Fonctionnalité à réaliser du point de vue utilisateur",
            l12_4: "<strong>Epic :</strong> Grande fonctionnalité regroupant plusieurs stories",
            l12_5: "<strong>Sous-tâche (Sub-task) :</strong> Partie d'une tâche ou d'une story plus grande",

            q13: "Q13 : Quelles sont les étapes d'un ticket ? (à faire - en cours - terminé)",
            a13: "Les étapes typiques d'un ticket dans Jira sont :",
            l13_1: "<strong>À faire (To Do) :</strong> Le ticket est créé mais pas encore commencé",
            l13_2: "<strong>En cours (In Progress) :</strong> Quelqu'un travaille activement sur le ticket",
            l13_3: "<strong>En révision (In Review) :</strong> Le travail est terminé et en attente de validation",
            l13_4: "<strong>Terminé (Done) :</strong> Le travail est validé et complété",

            q14: "Q14 : Quel est le rôle du BackLog dans Jira Software ?",
            a14: "Le BackLog dans Jira Software est :",
            l14_1: "L'ensemble des sprints prévus pour un projet",
            l14_2: "Une liste priorisée de tout le travail à réaliser",
            l14_3: "Un espace où le Product Owner gère et priorise les éléments",
            l14_4: "La source de travail pour les sprints futurs",
            l14_5: "Un outil de planification visuel pour l'équipe",

            q15: "Q15 : Quel est le but de Git ?",
            a15: "Git est un système de contrôle de version distribué qui permet de :",
            l15_1: "Suivre les modifications dans le code source",
            l15_2: "Travailler en collaboration sur des projets",
            l15_3: "Garder un historique complet des changements",
            l15_4: "Créer des branches pour développer des fonctionnalités séparément",
            l15_5: "Revenir à des versions précédentes si nécessaire",
            l15_6: "Fusionner les modifications de plusieurs développeurs",

            q16: "Q16 : Quel est le but de GitHub ?",
            a16: "GitHub est une plateforme d'hébergement de code qui permet de :",
            l16_1: "Héberger des dépôts Git en ligne",
            l16_2: "Collaborer avec d'autres développeurs",
            l16_3: "Suivre et gérer les problèmes (issues)",
            l16_4: "Gérer les demandes de fusion (pull requests)",
            l16_5: "Mettre en place des intégrations continues (CI/CD)",
            l16_6: "Créer des pages web pour les projets",
            l16_7: "Participer à des projets open source",

            q17: "Q17 : Expliquer les commandes Git de base",

            q18: "Q18 : Quel est le rôle de DevOps ?",
            a18: "DevOps est une approche qui combine le développement (Dev) et les opérations (Ops) pour :",
            l18_1: "Accélérer le cycle de vie du développement",
            l18_2: "Améliorer la collaboration entre les équipes de développement et d'exploitation",
            l18_3: "Automatiser les processus d'intégration, de test et de déploiement",
            l18_4: "Assurer une livraison continue de valeur aux clients",
            l18_5: "Réduire les erreurs humaines grâce à l'automatisation",
            l18_6: "Améliorer la qualité et la fiabilité des logiciels",

            q19: "Q19 : Quel est le rôle de Kubernetes, Jira/Trello, Jenkins, Git, GitHub, runner ?",
            l19_1: "<strong>Kubernetes :</strong> Système d'orchestration de conteneurs qui automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées",
            l19_2: "<strong>Jira/Trello :</strong> Outils de gestion de projet et de suivi des tâches pour organiser le travail et collaborer en équipe",
            l19_3: "<strong>Jenkins :</strong> Serveur d'automatisation qui permet de construire, tester et déployer des logiciels (outil d'intégration continue)",
            l19_4: "<strong>Git :</strong> Système de contrôle de version pour suivre les changements dans le code source",
            l19_5: "<strong>GitHub :</strong> Plateforme d'hébergement de code basée sur Git pour la collaboration et la gestion de projet",
            l19_6: "<strong>Runner :</strong> Outil qui exécute des tâches automatisées dans un pipeline CI/CD (par exemple, GitLab Runner)",

            q20: "Q20 : Définir : CI/CD, pipeline",
            l20_1: "<strong>CI/CD (Continuous Integration/Continuous Delivery or Deployment) :</strong>",
            l20_2: "<strong>Intégration Continue (CI) :</strong> Pratique où les développeurs intègrent régulièrement leur code dans un dépôt central, après quoi des builds et des tests automatisés sont exécutés",
            l20_3: "<strong>Livraison/Déploiement Continu (CD) :</strong> Pratique où les changements de code sont automatiquement préparés pour une release en production",
            l20_4: "<strong>Pipeline :</strong> Ensemble de processus automatisés qui permettent de déplacer le logiciel du développement à la production. Un pipeline CI/CD typique inclut des étapes de build, de test, et de déploiement automatisées."
        }
    },
    ar: {
        title: "دليل المراجعة التقنية",
        subtitle: "منهجيات Agile، Scrum، Jira، Git، GitHub و DevOps",
        tocTitle: "فهرس المحتويات",
        footer: "نسخة فاسكا الوعزيزيFaska Elouaaziki Version",
        rights: "© 2026 جميع الحقوق محفوظة.",
        nav: {
            agile: "منهجيات Agile و Scrum",
            jira: "Jira",
            git: "Git و GitHub",
            devops: "DevOps"
        },
        sections: {
            agile: "منهجيات Agile و Scrum",
            jira: "Jira",
            git: "Git و GitHub",
            devops: "DevOps"
        },
        qa: {
            q1: "س1: ما هي سلبيات المنهجيات التنبؤية: الشلال (Waterfall)، Y و V؟",
            a1: "سلبيات المنهجيات التنبؤية (الشلال، Y، V) هي:",
            l1_1: "نقص المرونة: صعوبة تعديل المتطلبات بمجرد بدء التطوير",
            l1_2: "التسليم المتأخر للمنتج الوظيفي: العميل لا يرى النتيجة إلا في النهاية",
            l1_3: "مخاطر عالية: إذا تم اكتشاف خطأ في وقت متأخر، يكون إصلاحه مكلفًا",
            l1_4: "تواصل محدود مع العميل أثناء التطوير",
            l1_5: "صعوبة التكيف مع التغيرات التكنولوجية أو تغيرات السوق",

            q2: "س2: ما هي إيجابيات المنهجيات الرشيقة (Agile)؟",
            a2: "إيجابيات المنهجيات الرشيقة هي:",
            l2_1: "المرونة والقدرة على التكيف مع التغييرات",
            l2_2: "تسليمات متكررة وتدريجية للميزات",
            l2_3: "تعاون وثيق مع العميل وأصحاب المصلحة",
            l2_4: "تقليل المخاطر بفضل التغذية الراجعة السريعة",
            l2_5: "التحسين المستمر للعملية والمنتج",
            l2_6: "فرق منظمة ذاتيًا ومستقلة",
            l2_7: "زيادة رضا العملاء",

            q3: "س3: تعريف منهجية Agile",
            a3: "منهجية Agile هي نهج لإدارة المشاريع وتطوير البرمجيات يركز على المرونة، تعاون العملاء، التسليم السريع للقيمة، والتكيف مع التغييرات. وتستند إلى 4 قيم أساسية:",
            l3_1: "الأفراد وتفاعلاتهم أكثر من العمليات والأدوات",
            l3_2: "برمجيات صالحة للعمل أكثر من التوثيق الشامل",
            l3_3: "تعاون العملاء أكثر من التفاوض حول العقود",
            l3_4: "الاستجابة للتغيير أكثر من اتباع خطة محددة",

            q4: "س4: تعريف Sprint",
            a4: "السبرينت (Sprint) هو فترة زمنية ثابتة (عادة من 1 إلى 4 أسابيع) يعمل خلالها فريق Scrum لإنجاز مجموعة محددة ومتفق عليها من العمل. في نهاية كل سبرينت، يجب أن يكون الفريق قد سلم زيادة في المنتج قابلة للإصدار.",

            q5: "س5: ما هي الأدوار في Scrum؟",
            a5: "الأدوار في Scrum هي:",
            l5_1: "<strong>مالك المنتج (Product Owner):</strong> مسؤول عن تعظيم قيمة المنتج وإدارة قائمة مهام المنتج (Product Backlog)",
            l5_2: "<strong>سكروم ماستر (Scrum Master):</strong> الميسر الذي يضمن أن الفريق يتبع مبادئ وممارسات Scrum",
            l5_3: "<strong>فريق التطوير (Development Team):</strong> مجموعة المحترفين الذين يقومون بتنفيذ العمل",
            l5_4: "<strong>أصحاب المصلحة (Stakeholders):</strong> الأشخاص المهتمون بالمنتج ولكنهم ليسوا جزءًا مباشرًا من فريق Scrum",

            q6: "س6: ما هو دور Scrum Master؟",
            a6: "الـ Scrum Master هو قائد خادم يقوم بـ:",
            l6_1: "تيسير أحداث Scrum",
            l6_2: "إزالة العقبات التي تعيق الفريق",
            l6_3: "توجيه الفريق في ممارسات Scrum",
            l6_4: "حماية الفريق من المشتتات الخارجية",
            l6_5: "المساعدة في التحسين المستمر",
            l6_6: "ضمان بقاء الفريق منتجًا ومركّزًا",

            q7: "س7: ما هي الأحداث (المراحل) في Scrum؟",
            a7: "أحداث Scrum هي:",
            l7_1: "<strong>تخطيط السبرينت (Sprint Planning):</strong> تخطيط العمل الذي سيتم إنجازه خلال السبرينت",
            l7_2: "<strong>اجتماع السكروم اليومي (Daily Scrum):</strong> اجتماع يومي مدته 15 دقيقة لمزامنة الفريق",
            l7_3: "<strong>مراجعة السبرينت (Sprint Review):</strong> عرض العمل المنجز على أصحاب المصلحة",
            l7_4: "<strong>استعراض السبرينت (Sprint Retrospective):</strong> التفكير في العملية من أجل التحسين",
            l7_5: "<strong>السبرينت نفسه:</strong> الفترة الزمنية لإنجاز العمل",

            q8: "س8: ما هي القطع الأثرية (Artifacts) الثلاثة في Scrum؟",
            a8: "القطع الأثرية الثلاثة في Scrum هي:",
            l8_1: "<strong>سجل المنتج (Product Backlog):</strong> قائمة مرتبة بالأولويات لكل ما قد يحتاجه المنتج",
            l8_2: "<strong>سجل السبرينت (Sprint Backlog):</strong> مجموعة العناصر المختارة من سجل المنتج لسبرينت معين",
            l8_3: "<strong>زيادة المنتج (Increment):</strong> مجموع جميع عناصر سجل المنتج التي تم الانتهاء منها حتى الآن",

            q9: "س9: إعطاء أمثلة على قصص المستخدم (User Stories)",
            a9: "أمثلة على قصص المستخدم:",
            l9_1: "\"كمستخدم، أريد أن أتمكن من تسجيل الدخول ببريدي الإلكتروني وكلمة المرور للوصول إلى حسابي\"",
            l9_2: "\"كمسؤول، أريد أن أتمكن من تصدير بيانات المستخدمين بتنسيق CSV لتحليلها\"",
            l9_3: "\"كعميل، أريد أن أتمكن من تتبع طلبي في الوقت الفعلي لمعرفة متى سيتم تسليمه\"",
            l9_4: "\"كمشترٍ، أريد أن أتمكن من إضافة سلع إلى عربة التسوق لشرائها لاحقًا\"",

            q10: "س10: ما هو الهدف من Jira؟",
            a10: "جيرا (Jira) هي منصة لإدارة المشاريع وتتبع المشاكل طورتها Atlassian. تتيح:",
            l10_1: "تخطيط وتتبع وإدارة مشاريع Agile",
            l10_2: "تنظيم العمل في سبرينتات وسجلات (Backlogs)",
            l10_3: "تتبع الأخطاء والمهام",
            l10_4: "التعاون كفريق",
            l10_5: "إنشاء تقارير حول تقدم المشاريع",

            q11: "س11: تعريف: تذكرة، Epic، قصة، مهمة، خطأ، BackLog",
            l11_1: "<strong>تذكرة (Ticket):</strong> عنصر عمل في Jira يمثل مهمة، خطأ، قصة، إلخ.",
            l11_2: "<strong>ملحمة (Epic):</strong> عمل كبير يمكن تقسيمه إلى عدة قصص أو مهام أصغر",
            l11_3: "<strong>قصة (Story):</strong> ميزة من وجهة نظر المستخدم، تصاغ عادة كقصة مستخدم",
            l11_4: "<strong>مهمة (Task):</strong> عمل تقني يجب إنجازه لإكمال قصة",
            l11_5: "<strong>خطأ (Bug):</strong> خطأ أو مشكلة في الكود يجب إصلاحها",
            l11_6: "<strong>سجل العمل (BackLog):</strong> قائمة مرتبة بالأولويات لكل العمل الذي يجب إنجازه في المشروع",

            q12: "س12: ما هي أنواع التذاكر؟",
            a12: "أنواع التذاكر الشائعة في Jira هي:",
            l12_1: "<strong>مهمة (Task):</strong> إجراء تقني يجب تنفيذه",
            l12_2: "<strong>خطأ (Bug):</strong> خطأ يجب تصحيحه",
            l12_3: "<strong>قصة (Story):</strong> ميزة يجب إنجازها من وجهة نظر المستخدم",
            l12_4: "<strong>ملحمة (Epic):</strong> ميزة كبيرة تجمع عدة قصص",
            l12_5: "<strong>مهمة فرعية (Sub-task):</strong> جزء من مهمة أو قصة أكبر",

            q13: "س13: ما هي مراحل التذكرة؟ (للعمل - قيد التنفيذ - تم)",
            a13: "المراحل النموذجية لتذكرة في Jira هي:",
            l13_1: "<strong>للعمل (To Do):</strong> التذكرة تم إنشاؤها ولكن لم يبدأ العمل عليها بعد",
            l13_2: "<strong>قيد التنفيذ (In Progress):</strong> شخص ما يعمل بنشاط على التذكرة",
            l13_3: "<strong>قيد المراجعة (In Review):</strong> العمل انتهى وفي انتظار التحقق",
            l13_4: "<strong>تم (Done):</strong> العمل تم التحقق منه واكتمل",

            q14: "س14: ما هو دور الـ BackLog في Jira Software؟",
            a14: "الـ BackLog في Jira Software هو:",
            l14_1: "مجموعة السبرينتات المخطط لها لمشروع ما",
            l14_2: "قائمة مرتبة بالأولويات لكل العمل الذي يجب إنجازه",
            l14_3: "مساحة حيث يدير مالك المنتج العناصر ويرتب أولوياتها",
            l14_4: "مصدر العمل للسبرينتات المستقبلية",
            l14_5: "أداة تخطيط مرئية للفريق",

            q15: "س15: ما هو الهدف من Git؟",
            a15: "Git هو نظام تحكم في الإصدار الموزع يتيح:",
            l15_1: "تتبع التغييرات في الكود المصدري",
            l15_2: "العمل بالتعاون على المشاريع",
            l15_3: "الاحتفاظ بسجل كامل للتغييرات",
            l15_4: "إنشاء فروع (branches) لتطوير الميزات بشكل منفصل",
            l15_5: "العودة إلى إصدارات سابقة إذا لزم الأمر",
            l15_6: "دمج تغييرات عدة مطورين",

            q16: "س16: ما هو الهدف من GitHub؟",
            a16: "GitHub هي منصة لاستضافة الكود تتيح:",
            l16_1: "استضافة مستودعات Git عبر الإنترنت",
            l16_2: "التعاون مع مطورين آخرين",
            l16_3: "تتبع وإدارة المشاكل (issues)",
            l16_4: "إدارة طلبات الدمج (pull requests)",
            l16_5: "إعداد التكامل المستمر (CI/CD)",
            l16_6: "إنشاء صفحات ويب للمشاريع",
            l16_7: "المشاركة في مشاريع مفتوحة المصدر",

            q17: "س17: شرح أوامر Git الأساسية",

            q18: "س18: ما هو دور DevOps؟",
            a18: "DevOps هو نهج يجمع بين التطوير (Dev) والعمليات (Ops) من أجل:",
            l18_1: "تسريع دورة حياة التطوير",
            l18_2: "تحسين التعاون بين فرق التطوير والتشغيل",
            l18_3: "أتمتة عمليات التكامل والاختبار والنشر",
            l18_4: "ضمان تسليم مستمر للقيمة للعملاء",
            l18_5: "تقليل الأخطاء البشرية بفضل الأتمتة",
            l18_6: "تحسين جودة وموثوقية البرمجيات",

            q19: "س19: ما هو دور Kubernetes، Jira/Trello، Jenkins، Git، GitHub، runner؟",
            l19_1: "<strong>Kubernetes:</strong> نظام تنسيق الحاويات يقوم بأتمتة نشر وتوسيع وإدارة التطبيقات الموجودة في حاويات",
            l19_2: "<strong>Jira/Trello:</strong> أدوات إدارة المشاريع وتتبع المهام لتنظيم العمل والتعاون كفريق",
            l19_3: "<strong>Jenkins:</strong> خادم أتمتة يتيح بناء واختبار ونشر البرمجيات (أداة التكامل المستمر)",
            l19_4: "<strong>Git:</strong> نظام تحكم في الإصدار لتتبع التغييرات في الكود المصدري",
            l19_5: "<strong>GitHub:</strong> منصة استضافة كود تعتمد على Git للتعاون وإدارة المشاريع",
            l19_6: "<strong>Runner:</strong> أداة تنفذ مهام مؤتمتة في خط أنابيب CI/CD (مثل GitLab Runner)",

            q20: "س20: تعريف: CI/CD، Pipeline",
            l20_1: "<strong>CI/CD (التكامل المستمر/التسليم أو النشر المستمر):</strong>",
            l20_2: "<strong>التكامل المستمر (CI):</strong> ممارسة يقوم فيها المطورون بدمج كودهم بانتظام في مستودع مركزي، وبعد ذلك يتم تشغيل عمليات بناء واختبارات مؤتمتة",
            l20_3: "<strong>التسليم/النشر المستمر (CD):</strong> ممارسة يتم فيها إعداد تغييرات الكود تلقائيًا للإصدار في الإنتاج",
            l20_4: "<strong>Pipeline (خط الأنابيب):</strong> مجموعة من العمليات المؤتمتة التي تتيح نقل البرمجيات من التطوير إلى الإنتاج. يتضمن خط أنابيب CI/CD النموذجي مراحل بناء واختبار ونشر مؤتمتة."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check local storage for theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Language Switcher
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'fr';
    
    // Initial load
    setLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'ar' : 'fr';
        setLanguage(currentLang);
    });

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        if (lang === 'ar') {
            body.classList.add('rtl');
            langToggle.textContent = 'FR';
        } else {
            body.classList.remove('rtl');
            langToggle.textContent = 'عربي';
        }

        // Update content
        updateContent(lang);
    }

    function updateContent(lang) {
        const t = translations[lang];
        
        // Header
        document.getElementById('main-title').textContent = t.title;
        document.getElementById('main-subtitle').textContent = t.subtitle;
        
        // TOC
        document.getElementById('toc-title').textContent = t.tocTitle;
        document.getElementById('link-agile').textContent = t.nav.agile;
        document.getElementById('link-jira').textContent = t.nav.jira;
        document.getElementById('link-git').textContent = t.nav.git;
        document.getElementById('link-devops').textContent = t.nav.devops;
        
        // Section Headers
        document.getElementById('header-agile').textContent = t.sections.agile;
        document.getElementById('header-jira').textContent = t.sections.jira;
        document.getElementById('header-git').textContent = t.sections.git;
        document.getElementById('header-devops').textContent = t.sections.devops;
        
        // Q&A Content
        // We use a helper to safely set HTML content (for strong tags)
        const setHTML = (id, content) => {
            const el = document.getElementById(id);
            if (el && content) el.innerHTML = content;
        };
        const setText = (id, content) => {
            const el = document.getElementById(id);
            if (el && content) el.textContent = content;
        };

        // Q1
        setText('q1', t.qa.q1);
        setText('a1', t.qa.a1);
        setText('l1-1', t.qa.l1_1);
        setText('l1-2', t.qa.l1_2);
        setText('l1-3', t.qa.l1_3);
        setText('l1-4', t.qa.l1_4);
        setText('l1-5', t.qa.l1_5);

        // Q2
        setText('q2', t.qa.q2);
        setText('a2', t.qa.a2);
        setText('l2-1', t.qa.l2_1);
        setText('l2-2', t.qa.l2_2);
        setText('l2-3', t.qa.l2_3);
        setText('l2-4', t.qa.l2_4);
        setText('l2-5', t.qa.l2_5);
        setText('l2-6', t.qa.l2_6);
        setText('l2-7', t.qa.l2_7);

        // Q3
        setText('q3', t.qa.q3);
        setText('a3', t.qa.a3);
        setText('l3-1', t.qa.l3_1);
        setText('l3-2', t.qa.l3_2);
        setText('l3-3', t.qa.l3_3);
        setText('l3-4', t.qa.l3_4);

        // Q4
        setText('q4', t.qa.q4);
        setText('a4', t.qa.a4);

        // Q5
        setText('q5', t.qa.q5);
        setText('a5', t.qa.a5);
        setHTML('l5-1', t.qa.l5_1);
        setHTML('l5-2', t.qa.l5_2);
        setHTML('l5-3', t.qa.l5_3);
        setHTML('l5-4', t.qa.l5_4);

        // Q6
        setText('q6', t.qa.q6);
        setText('a6', t.qa.a6);
        setText('l6-1', t.qa.l6_1);
        setText('l6-2', t.qa.l6_2);
        setText('l6-3', t.qa.l6_3);
        setText('l6-4', t.qa.l6_4);
        setText('l6-5', t.qa.l6_5);
        setText('l6-6', t.qa.l6_6);

        // Q7
        setText('q7', t.qa.q7);
        setText('a7', t.qa.a7);
        setHTML('l7-1', t.qa.l7_1);
        setHTML('l7-2', t.qa.l7_2);
        setHTML('l7-3', t.qa.l7_3);
        setHTML('l7-4', t.qa.l7_4);
        setHTML('l7-5', t.qa.l7_5);

        // Q8
        setText('q8', t.qa.q8);
        setText('a8', t.qa.a8);
        setHTML('l8-1', t.qa.l8_1);
        setHTML('l8-2', t.qa.l8_2);
        setHTML('l8-3', t.qa.l8_3);

        // Q9
        setText('q9', t.qa.q9);
        setText('a9', t.qa.a9);
        setText('l9-1', t.qa.l9_1);
        setText('l9-2', t.qa.l9_2);
        setText('l9-3', t.qa.l9_3);
        setText('l9-4', t.qa.l9_4);

        // Q10
        setText('q10', t.qa.q10);
        setText('a10', t.qa.a10);
        setText('l10-1', t.qa.l10_1);
        setText('l10-2', t.qa.l10_2);
        setText('l10-3', t.qa.l10_3);
        setText('l10-4', t.qa.l10_4);
        setText('l10-5', t.qa.l10_5);

        // Q11
        setText('q11', t.qa.q11);
        setHTML('l11-1', t.qa.l11_1);
        setHTML('l11-2', t.qa.l11_2);
        setHTML('l11-3', t.qa.l11_3);
        setHTML('l11-4', t.qa.l11_4);
        setHTML('l11-5', t.qa.l11_5);
        setHTML('l11-6', t.qa.l11_6);

        // Q12
        setText('q12', t.qa.q12);
        setText('a12', t.qa.a12);
        setHTML('l12-1', t.qa.l12_1);
        setHTML('l12-2', t.qa.l12_2);
        setHTML('l12-3', t.qa.l12_3);
        setHTML('l12-4', t.qa.l12_4);
        setHTML('l12-5', t.qa.l12_5);

        // Q13
        setText('q13', t.qa.q13);
        setText('a13', t.qa.a13);
        setHTML('l13-1', t.qa.l13_1);
        setHTML('l13-2', t.qa.l13_2);
        setHTML('l13-3', t.qa.l13_3);
        setHTML('l13-4', t.qa.l13_4);

        // Q14
        setText('q14', t.qa.q14);
        setText('a14', t.qa.a14);
        setText('l14-1', t.qa.l14_1);
        setText('l14-2', t.qa.l14_2);
        setText('l14-3', t.qa.l14_3);
        setText('l14-4', t.qa.l14_4);
        setText('l14-5', t.qa.l14_5);

        // Q15
        setText('q15', t.qa.q15);
        setText('a15', t.qa.a15);
        setText('l15-1', t.qa.l15_1);
        setText('l15-2', t.qa.l15_2);
        setText('l15-3', t.qa.l15_3);
        setText('l15-4', t.qa.l15_4);
        setText('l15-5', t.qa.l15_5);
        setText('l15-6', t.qa.l15_6);

        // Q16
        setText('q16', t.qa.q16);
        setText('a16', t.qa.a16);
        setText('l16-1', t.qa.l16_1);
        setText('l16-2', t.qa.l16_2);
        setText('l16-3', t.qa.l16_3);
        setText('l16-4', t.qa.l16_4);
        setText('l16-5', t.qa.l16_5);
        setText('l16-6', t.qa.l16_6);
        setText('l16-7', t.qa.l16_7);

        // Q17
        setText('q17', t.qa.q17);

        // Q18
        setText('q18', t.qa.q18);
        setText('a18', t.qa.a18);
        setText('l18-1', t.qa.l18_1);
        setText('l18-2', t.qa.l18_2);
        setText('l18-3', t.qa.l18_3);
        setText('l18-4', t.qa.l18_4);
        setText('l18-5', t.qa.l18_5);
        setText('l18-6', t.qa.l18_6);

        // Q19
        setText('q19', t.qa.q19);
        setHTML('l19-1', t.qa.l19_1);
        setHTML('l19-2', t.qa.l19_2);
        setHTML('l19-3', t.qa.l19_3);
        setHTML('l19-4', t.qa.l19_4);
        setHTML('l19-5', t.qa.l19_5);
        setHTML('l19-6', t.qa.l19_6);

        // Q20
        setText('q20', t.qa.q20);
        setHTML('l20-1', t.qa.l20_1);
        setHTML('l20-2', t.qa.l20_2);
        setHTML('l20-3', t.qa.l20_3);
        setHTML('l20-4', t.qa.l20_4);
    }
});
