// recipeData.js
const recipes = [
    /* Appetizers */ 

    /* Main - Courses */
    
    // Stir-Fried Pasta with Salmon
    {
        id: 201,
        name: "מוקפץ עם סלמון וברוקולי",
        category: "main-courses",
        cookingTime: 150,  // Including marination time
        difficulty: "בינונית",
        mainIngredient: "דג",
        image: "stir-fried-noodles-with-salmon.jpg",
        tags: ["סלמון", "ברוקולי", "שעועית ירוקה", "פסטה", "סויה"],
        servings: 4,
        ingredients: [
            { item: "פילה סלמון", amount: 500, unit: "גרם" },
            { item: "סויה", amount: 0.5, unit: "כוס" },
            { item: "סילאן", amount: 2, unit: "כפות" },
            { item: "טריאקי", amount: 2, unit: "כפות" },
            { item: "אבקת צ'ילי", amount: 0.5, unit: "כפית" },
            { item: "שעועית ירוקה עדינה", amount: 1, unit: "חבילה" },
            { item: "ברוקולי", amount: 1, unit: "ראש" },
            { item: "אטריות אורז/חיטה", amount: 1, unit: "חבילה" },
            { item: "שיני שום", amount: 3, unit: "יחידות" },
            { item: "שמן זית", amount: 3, unit: "כפות" }
        ],
        stages: [
            {
                title: "הכנת הסלמון",
                instructions: [
                    "חותכים את פילה הסלמון לקוביות.",
                    "מכינים תערובת השרייה: חצי כוס סויה, 2 כפות סילאן, 2 כפות טריאקי, קצת אבקת צ'ילי/פפריקה חריפה.",
                    "משרים את קוביות הסלמון בתערובת למשך שעתיים."
                ]
            },
            {
                title: "הכנת הירקות והפסטה",
                instructions: [
                    "מבשלים את השעועית והברוקולי בנפרד עד שהם רכים אך עדיין פריכים.",
                    "מכינים את הפסטה או אטריות הביצים לפי הוראות היצרן."
                ]
            },
            {
                title: "הקפצה וסיום",
                instructions: [
                    "מקפיצים את הסלמון בווק עם שמן זית עד שנצרב ומוציאים.",
                    "באותו ווק, מטגנים 3 שיני שום בשמן זית על אש נמוכה-בינונית.",
                    "מוסיפים את השעועית והברוקולי ומקפיצים.",
                    "מוסיפים את הפסטה/אטריות המבושלות.",
                    "מחזירים את הסלמון לווק יחד עם הרוטב מההשרייה.",
                    "מקפיצים הכל יחד למספר דקות נוספות עד שהכל מתערבב ומתחמם."
                ]
            }
        ]
    },
    
    // Bolognese
    {
        id: 202,
        name: "בולונז",
        category: "main-courses",
        cookingTime: 90,
        difficulty: "בינונית",
        mainIngredient: "בשר",
        image: "bolognese.jpg",
        tags: ["בשר טחון", "רוטב", "פסטה", "עגבניות"],
        servings: 6,
        ingredients: [
            { item: "בשר טחון", amount: 1, unit: "קילו" },
            { item: "שיני שום", amount: 3, unit: "יחידות" },
            { item: "שמן זית", amount: 0.25, unit: "כוס" },
            { item: "עגבניות מרוסקות", amount: 1, unit: "קופסה" },
            { item: "רסק עגבניות", amount: 1, unit: "קופסה" },
            { item: "גזר גדול", amount: 1, unit: "יחידה" }
        ],
        stages: [
            {
                title: "הכנה מוקדמת",
                instructions: [
                    "מגרדים את הגזר לחתיכות קטנות.",
                    "טוחנים את העגבניות עד לקבלת מרקם אחיד חלק ומוסיפים כפית שטוחה של סוכר."
                ]
            },
            {
                title: "טיגון הבשר",
                instructions: [
                    "מחממים מחבת על אש גבוהה.",
                    "מוסיפים שמן זית ו-2 שיני שום.",
                    "מוסיפים את הבשר הטחון, מפרקים אותו לחתיכות קטנות ומטגנים עד שמשנה צבע.",
                    "מתבלים עם חצי כפית כורכום, מלח, פלפל שחור וצ'ילי.",
                    "כשהבשר בגודל ובצבע הרצוי, מוציאים ושמים בצד."
                ]
            },
            {
                title: "הכנת הרוטב",
                instructions: [
                    "באותה המחבת, מוסיפים רבע כוס שמן זית, שן שום, וקופסת הרסק.",
                    "מוסיפים את העגבניות החתוכות וחצי כוס מים רותחים.",
                    "מבשלים עם מכסה סגור במשך 10 דקות על אש בינונית."
                ]
            },
            {
                title: "סיום הבישול",
                instructions: [
                    "מוסיפים את הגזר וכפית שטוחה פפריקה.",
                    "מחזירים את הבשר הטחון לסיר.",
                    "משאירים על אש נמוכה לכמה שיותר זמן, אפשר להוסיף עוד מים לקבלת רוטב פחות סמיך."
                ]
            }
        ]
    },

    // Mom's Patties (Ketzitzot)
    {
        id: 203,
        name: "קציצות של אמא",
        category: "main-courses",
        cookingTime: 20,
        difficulty: "קלה",
        mainIngredient: "בשר",
        image: "patties.jpeg",
        tags: ["בשר טחון", "קציצות", "תפוחי אדמה"],
        servings: 4,
        ingredients: [
            { item: "בשר טחון (בקר)", amount: 500, unit: "גרם" },
            { item: "תפוח אדמה בינוני-קטן", amount: 1, unit: "יחידה" },
            { item: "בצל בינוני", amount: 1, unit: "יחידה" },
            { item: "ביצה", amount: 1, unit: "יחידה" },
            { item: "כמון", amount: 1, unit: "כפית שטוחה" },
            { item: "מלח", amount: 1, unit: "כפית שטוחה" },
            { item: "פלפל", amount: 1, unit: "קמצוץ" },
            { item: "כורכום", amount: 1, unit: "קמצוץ" },
            { item: "אבקת צ'ילי חריף", amount: 1, unit: "לבחירה" },
            { item: "שמן קנולה", amount: 2, unit: "כפות" }
        ],
        instructions: [
            "מגרדים תפוח אדמה לתוך קערה הכי קטן שאפשר וסוחטים ממנו את המיץ.",
            "מגרדים את הבצל.",
            "מוסיפים את הבשר הטחון, הביצה וכל התבלינים ומערבבים היטב.",
            "שמים שכבה דקה של שמן קנולה על המחבת עם כורכום.",
            "מבשלים את הקציצות על אש בינונית.",
            "הופכים ומוציאים כשמוכן."
        ]
    },

    // Pasta with Chicken Breasts
    {
        id: 204,
        name: "פסטה עם חזה עוף בתיבול מזרחי",
        category: "main-courses",
        cookingTime: 30,
        difficulty: "קלה",
        mainIngredient: "עוף",
        image: "pasta-with-chickecn-breasts.jpg",
        tags: ["עוף", "פסטה", "ברוקולי", "קלמטה", "ארטישוק"],
        servings: 4,
        ingredients: [
            { item: "חזה עוף", amount: 500, unit: "גרם" },
            { item: "פסטה", amount: 500, unit: "גרם" },
            { item: "שום כתוש", amount: 3, unit: "שיניים" },
            { item: "זיתי קלמטה ללא חרצנים", amount: 100, unit: "גרם" },
            { item: "ברוקולי מאודה", amount: 1, unit: "ראש" },
            { item: "ארטישוק", amount: 1, unit: "קופסה" },
            { item: "שמן זית", amount: 0.25, unit: "כוס" },
            { item: "כורכום", amount: 0.5, unit: "כפית" },
            { item: "פפריקה אדומה", amount: 1, unit: "כפית" },
            { item: "כמון", amount: 1, unit: "כפית" },
            { item: "צ'ילי", amount: 1, unit: "לפי הטעם" },
            { item: "מלח ופלפל", amount: 1, unit: "לפי הטעם" }
        ],
        stages: [
            {
                title: "הכנת העוף",
                instructions: [
                    "מחממים בווק שמן זית ושום.",
                    "מקפיצים את העוף עם התבלינים - חצי כפית כורכום, כפית פפריקה, כפית כמון, מלח, פלפל וצ'ילי לפי הטעם.",
                    "כשמוכן מוציאים ושומרים בצד."
                ]
            },
            {
                title: "הכנת הירקות והפסטה",
                instructions: [
                    "מחממים שוב שמן זית ושום בווק.",
                    "מוסיפים זיתים ומקפיצים 2-3 דקות.",
                    "מוסיפים חצי כפית כורכום, כפית כמון, כפית פפריקה ומערבבים היטב.",
                    "מוסיפים ארטישוק ומטגנים עד שמשחים.",
                    "מוסיפים ברוקולי ומערבבים.",
                    "מוסיפים שמן זית ותיבול נוסף אם יש צורך.",
                    "מוסיפים את הפסטה המבושלת ומקפיצים הכל יחד.",
                    "מחזירים את העוף לווק ומערבבים.",
                    "טועמים ומתקנים תיבול אם צריך."
                ]
            }
        ]
    },

    // Chicken Breasts with Paprika
    {
        id: 205,
        name: "חזה עוף בפפריקה",
        category: "main-courses",
        cookingTime: 20,
        difficulty: "קלה",
        mainIngredient: "עוף",
        image: "chicken-breasts-with-paprika.jpg",
        tags: ["עוף", "פפריקה", "מהיר"],
        servings: 10,
        ingredients: [
            { item: "שמן זית", amount: 0.25, unit: "כוס" },
            { item: "פפריקה אדומה מתוקה", amount: 1, unit: "כפית" },
            { item: "מלח", amount: 0.5, unit: "כפית" },
            { item: "צ'ילי חריף", amount: 1, unit: "לבחירה" },
            { item: "חזה עוף", amount: 4, unit: "יחידות" }
        ],
        instructions: [
            "מערבבים בקערה את השמן זית, כפית שטוחה פפריקה אדומה מתוקה וחצי כפית מלח.",
            "אם רוצים אפשר להוסיף צ'ילי חריף.",
            "טובלים ומערבבים את העוף מכל הצדדים ברוטב.",
            "מחממים מחבת פסים.",
            "מטגנים את חזה העוף משני הצדדים."
        ]
    },

    // Schnitzel
    {
        id: 206,
        name: "שניצלים",
        category: "main-courses",
        cookingTime: 30,
        difficulty: "קלה",
        mainIngredient: "עוף",
        image: "shnitzel.jpeg",
        tags: ["עוף", "פירורי לחם"],
        servings: 10,
        ingredients: [
            { item: "חזה עוף", amount: 10, unit: "יחידות" },
            { item: "ביצים", amount: 2, unit: "יחידות" },
            { item: "מלח", amount: 0.5, unit: "כפית" },
            { item: "פלפל שחור", amount: 0.25, unit: "כפית" },
            { item: "כמון", amount: 0.25, unit: "כפית" },
            { item: "כורכום", amount: 0.25, unit: "כפית" },
            { item: "פירורי לחם", amount: 2, unit: "כוסות" },
            { item: "שמן לטיגון", amount: 0.25, unit: "כוס" }
        ],
        instructions: [
            "שוברים את הביצים לקערה ומערבבים היטב יחד עם התבלינים.",
            "שופכים את פירורי הלחם לקערה נפרדת.",
            "טובלים את החזה עוף ברוטב ואז בפירורי לחם ואז מעבירים למחבת על אש בינונית-גבוהה."
        ],
        comments: [
            "אפשר להכין מראש ולשים במקרר שיספוג את הטעם (שניצל בביצה ותבלינים בלי פירורי לחם)",
            "אפשר לייבש את החזה עוף עם נייר סופג לפני הטבילה בביצה כדי שפירורי הלחם ידבקו יותר טוב"
        ]
    },

    /* Side - Dishes */

    // Rice with Green Beans and Carrot
    {
        id: 301,
        name: "אורז עם שעועית וגזר",
        category: "side-dishes",
        cookingTime: 90,
        difficulty: "בינונית",
        mainIngredient: "אורז",
        image: "rice-with-green-beans-and-carrots.jpg",
        tags: ["אורז", "שעועית", "גזר"],
        servings: 6,
        ingredients: [
            { item: "אורז יסמין", amount: 5, unit: "כוסות" },
            { item: "גזר", amount: 500, unit: "גרם" },
            { item: "שעועית קפואה עדינה", amount: 600, unit: "גרם" },
            { item: "שמן חמניות", amount: 0.25, unit: "כוס" },
            { item: "שיני שום", amount: 2, unit: "יחידות" },
            { item: "כורכום", amount: 0.5, unit: "כפית" },
            { item: "מלח", amount: 2, unit: "כפות" },
            { item: "צ'ילי חריף", amount: 1, unit: "לבחירה" }
        ],
        stages: [
            {
                title: "הכנת הירקות",
                instructions: [
                    "חותכים את הגזר לחתיכות קטנות.",
                    "שמים בסיר את שיני השום יחד עם חצי כפית כורכום ורבע כוס שמן חמניות.",
                    "מוסיפים את הגזר ומקפיצים.",
                    "מוסיפים את השעועית יחד עם כף מלח וצ'ילי חריף.",
                    "מערבבים הכל, סוגרים את המכסה ושמים על אש בינונית עד שהגזר והשעועית אל דנטה - בערך 10 דקות."
                ]
            },
            {
                title: "הכנת האורז",
                instructions: [
                    "שוטפים את האורז במים על מנת להוציא את העמילן.",
                    "מרתיחים עם שתי כפות מלח גס ל-10 דקות."
                ]
            },
            {
                title: "הרכבה וסיום הבישול",
                instructions: [
                    "מחממים סיר עם שמן חמניות שתיווצר שכבה מלאה של שמן.",
                    "מוסיפים קערת מים רותחים וכפית קטנה של כורכום, מערבבים, מוציאים חצי מהנוזל בסיר ושומרים לאחר כך.",
                    "מערבבים טיפה את האורז, ושמים שכבה ראשונה שתכסה את השמן.",
                    "שמים שכבת ירקות ושכבת אורז לסירוגין עד שנגמר ולבסוף משאירים את האורז בצורת ערימה.",
                    "סוגרים את המכסה ונותנים להתבשל כ-15 דקות על אש בינונית גבוהה.",
                    "מוסיפים את השמן+מים שנשארו ומערבבים.",
                    "סוגרים את המכסה שוב לעוד 30 דקות על אש קטנה.",
                    "כשמוכן פותחים את הסיר (חצי מכסה) וניתן לתת לתאדיג להמשיך להתבשל."
                ]
            }
        ],
        comments: [
            "אם רוצים להכין מראש, אפשר לעצור אחרי ששמים את השמן ולהשאיר את המכסה חצי פתוח",
            "שעה לפני המועד הרצוי לשים שוב על האש - עשר דקות על אש גבוהה ו-50 דקות על אש נמוכה"
        ]
    },

    // White Rice
    {
        id: 302,
        name: "אורז לבן פרסי",
        category: "side-dishes",
        cookingTime: 90,
        difficulty: "בינונית",
        mainIngredient: "אורז",
        image: "white-rice.jpg",
        tags: ["אורז"],
        servings: 6,
        ingredients: [
            { item: "אורז", amount: 5, unit: "כוסות" },
            { item: "שמן קנולה", amount: 0.25, unit: "כוס" },
            { item: "כורכום", amount: 0.25, unit: "כפית" },
            { item: "מלח גס", amount: 2, unit: "כפות" }
        ],
        stages: [
            {
                title: "הכנת האורז",
                instructions: [
                    "לשטוף את האורז במים על מנת להוציא את העמילן ולסנן - לחזור על התהליך עד שהמים לא עכורים.",
                    "להרתיח מים עם שתי כפות מלח גס ולאחר מכן להכניס את האורז.",
                    "להוציא לאחר כ-10 דקות, כאשר האורז אל דנטה."
                ]
            },
            {
                title: "בישול האורז",
                instructions: [
                    "מחממים בסיר שמן קנולה, ולפני שהוא רותח מוסיפים חצי קערת מים רותחים על אש בינונית לשתי דקות.",
                    "מוציאים חצי מהנוזל בסיר חזרה לקערה ושומרים לסוף.",
                    "מוסיפים רבע כפית כורכום ומערבבים.",
                    "שופכים את האורז לסיר.",
                    "סוגרים את המכסה עם מגבת על אש בינונית למשך 10-15 דקות.",
                    "שופכים את החצי השני של השמן שהשארנו בצד, ומערבבים קצת את האורז.",
                    "סוגרים את המכסה לעוד כ-30 דקות וכשמרגישים שמוכן פותחים חצי מכסה.",
                    "ניתן להשאיר על האש עד כשעה לקבלת תאדיג!"
                ]
            }
        ]
    },

    // Israeli Couscous (Ptitim)
    {
        id: 303,
        name: "פתיתים",
        category: "side-dishes",
        cookingTime: 15,
        difficulty: "קלה",
        mainIngredient: "פתיתים",
        image: "israeli-couscous.jpeg",
        tags: ["פתיתים", "תיבולית"],
        servings: 4,
        ingredients: [
            { item: "פתיתים", amount: 2, unit: "כוסות" },
            { item: "תיבולית הודית של קנור", amount: 1, unit: "טבלית" },
            { item: "שמן זית", amount: 2, unit: "כפות" },
            { item: "מלח", amount: 1, unit: "לפי הטעם" },
            { item: "פלפל", amount: 1, unit: "לפי הטעם" }
        ],
        instructions: [
            "שמים את כל המרכיבים בסיר ומטגנים 2 דקות.",
            "מוסיפים מים רותחים (הרתחה בקומקום) עד שיכסו את גובה הפתיתים.",
            "מערבבים עד שהתיבולית נמסה, מנמיכים לאש נמוכה וסוגרים את הסיר ל-10 דקות.",
            "אם המים לא מתאדים להגביר את האש ולהוריד את המכסה."
        ]
    },

    // Majadra
    {
        id: 304,
        name: "מג'דרה",
        category: "side-dishes",
        cookingTime: 75,
        difficulty: "בינונית",
        mainIngredient: "אורז",
        image: "majadra.jpg",
        tags: ["אורז", "עדשים ירוקות", "גזר"],
        servings: 6,
        ingredients: [
            { item: "בצל גדול", amount: 1, unit: "יחידה" },
            { item: "שמן זית", amount: 3, unit: "כפות" },
            { item: "גזר", amount: 1, unit: "יחידה" },
            { item: "אורז", amount: 3, unit: "כוסות" },
            { item: "עדשים ירוקים", amount: 1.5, unit: "כוסות" },
            { item: "מלח", amount: 3, unit: "כפיות" },
            { item: "פלפל שחור", amount: 0.5, unit: "כפית" },
            { item: "כמון", amount: 1, unit: "כפית" },
            { item: "כורכום", amount: 0.5, unit: "כפית" }
        ],
        stages: [
            {
                title: "הכנת הבצל והעדשים",
                instructions: [
                    "לטגן את הבצל עם שמן זית עד שמזהיב.",
                    "לסנן את העדשים, להוסיף לסיר יחד עם התבלינים ולטגן כמה דקות.",
                    "לערבב ולהוסיף מים רותחים מעט מעל גובה העדשים, לכסות ולבשל רבע שעה על אש בינונית."
                ]
            },
            {
                title: "הוספת האורז והגזר",
                instructions: [
                    "להוסיף את הגזר והאורז ולערבב היטב (ניתן להוסיף כף שמן זית).",
                    "להוסיף 4-4.5 כוסות מים רותחים, לחכות שירתח, לכסות ולבשל על אש נמוכה כ-20 דקות/עד שנגמרים המים."
                ]
            },
            {
                title: "סיום הבישול",
                instructions: [
                    "טועמים ומוסיפים תבלינים אם צריך, לכסות את המכסה בבד ולהמשיך לבשל על אש קטנה כעוד חצי שעה."
                ]
            }
        ]
    },
    /* 4 - Soups & Stews */

    /* 5 - Salads */

    /* 6 - Desserts */
    
    // Brownies
    {
        id: 601,
        name: "בראוניז",
        category: "desserts",
        cookingTime: 70,
        difficulty: "קלה",
        mainIngredient: "שוקולד",
        image: "brownies.jpg",
        tags: ["שוקולד", "אפייה", "מתוק"],
        servings: 12,
        ingredients: [
            { item: "ביצים", amount: 4, unit: "יחידות" },
            { item: "סוכר לבן", amount: 1, unit: "כוס" },
            { item: "סוכר חום", amount: 1, unit: "כוס" },
            { item: "נס קפה עלית", amount: 1, unit: "כפית" },
            { item: "תמצית וניל", amount: 1, unit: "כפית" },
            { item: "שוקולד מריר", amount: 2.25, unit: "טבליות" },
            { item: "שוקולד חלב", amount: 100, unit: "גרם" },
            { item: "שוקולד לבן", amount: 100, unit: "גרם" },
            { item: "חמאה", amount: 200, unit: "גרם" },
            { item: "קמח", amount: 1, unit: "כוס" }
        ],
        instructions: [
            "טורפים באופן ידני את 4 הביצים.",
            "מוסיפים כוס סוכר לבן, כוס סוכר חום ומעט תמצית וניל.",
            "ממיסים 2 ורבע שוקולד מריר עם 200 גרם חמאה ומוסיפים לתערובת.",
            "מוסיפים כוס קמח.",
            "חותכים לחתיכות קטנות שוקולד לבן וחלב ומוסיפים לתערובת.",
            "אופים 40 דק על 180 מעלות.",
            "מוציאים מהתנור, חותכים כשעוד חם ומשאירים בתבנית להצטנן."
        ]
    },
    
    // Creme Brulee
    {
        id: 602,
        name: "קרם ברולה של רותם",
        category: "desserts",
        cookingTime: 45,
        difficulty: "קלה",
        mainIngredient: "שמנת מתוקה",
        image: "creme-brule.jpg",
        tags: ["קינוח", "שמנת", "מתוק"],
        servings: 6,
        ingredients: [
            // Note: Ingredients are not provided in the original HTML. You may want to add them.
        ],
        instructions: [
            "טוחנים הכל יחד עם בלנדר מוט.",
            "שמים בתבניות ואופים ב-140 מעלות.",
            "מוציאים כשיציב בשוליים ומעט רוטט במרכז (כ-30 דקות).",
            "מפזרים את הסוכר מעל ושורפים עם מבער (burner)."
        ]
    },

    /* 7 - Breakfast & Brunch */

    /* 8 - Snacks */

    /* 9 - Beverages */
    
    
    // Add more recipe objects as needed


];
