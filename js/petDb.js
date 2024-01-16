const petDb = [
    {
        "tier": 1,
        "name": "Ant",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give one random friend +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 1,
        "name": "Beaver",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Give two random friends +1 attack.",
        "pack": [
            "Turtle",
            "Puppy"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Beetle",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Gain Honey Perk.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Bluebird",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Give one random friend +1 attack.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 1,
        "name": "Bulldog",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Set attack equal to health +1.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "After attack"
    },
    {
        "tier": 1,
        "name": "Chinchilla",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Summon one 2/2 level 1 Loyal Chinchilla.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Chipmunk",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Stock one 1-gold copy of this pet's food perk.",
        "pack": [
            "Puppy",
            "Golden Retriever"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Cockroach",
        "attack": 1,
        "health": 4,
        "level": 1,
        "ability": "Set attack to the current shop tier + 1.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 1,
        "name": "Cone Snail",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give the nearest friend behind +2 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Cricket",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Summon one 1/1 Zombie Cricket.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 1,
        "name": "Duck",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give shop pets +1 health.",
        "pack": [
            "Turtle",
            "Puppy"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Duckling",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give left-most shop pet +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Ferret",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 1.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 1,
        "name": "Fish",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give two friends +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Level up"
    },
    {
        "tier": 1,
        "name": "Frilled Dragon",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Gain +1 attack and +1 health per friend with a Faint ability.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Frog",
        "attack": 3,
        "health": 1,
        "level": 1,
        "ability": "Swap stats of the two adjacent friends.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Gecko",
        "attack": 3,
        "health": 1,
        "level": 1,
        "ability": "If you have a toy, gain +2 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Goose",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Remove 1 attack from the first enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Groundhog",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Gain +1 Trumpet.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 1,
        "name": "Horse",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Give it +1 attack until end of battle.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 1,
        "name": "Hummingbird",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give +2 attack and +1 health to one random Strawberry friend.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Iguana",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Deal 1 attack to it.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Enemy summoned or pushed"
    },
    {
        "tier": 1,
        "name": "Kiwi",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give one random Strawberry friend +1 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Ladybug",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Gain +2 attack until end of battle.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Friend gained perk"
    },
    {
        "tier": 1,
        "name": "Magpie",
        "attack": 1,
        "health": 4,
        "level": 1,
        "ability": "Spend up to 1 gold and gain it back next turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 1,
        "name": "Marmoset",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Your next roll is free.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Mosquito",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Deal 1 damage to one random enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Moth",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give front-most friend +2 attack.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Mouse",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Stock one free Apple.",
        "pack": [
            "Turtle",
            "Starfish"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Opossum",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give one random Faint pet in the shop +1 attack and +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Otter",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give one random friend +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 1,
        "name": "Pied Tamarin",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Spend 1 Trumpet to deal 3 damage to one random enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 1,
        "name": "Pig",
        "attack": 4,
        "health": 1,
        "level": 1,
        "ability": "Gain +1 gold.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 1,
        "name": "Pillbug",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give the two nearest pets behind +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Shop tier upgraded"
    },
    {
        "tier": 1,
        "name": "Seahorse",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Push the last enemy one space forward.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 1,
        "name": "Silkmoth",
        "attack": 3,
        "health": 1,
        "level": 1,
        "ability": "Give it +1 health. Works 2 times per turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend ahead hurt"
    },
    {
        "tier": 1,
        "name": "Sloth",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Sloth has no special ability. Is kind of lame combat-wise. But he truly believes in you!",
        "pack": [
            "Turtle",
            "Puppy",
            "Starfish",
            "Golden Retriever"
        ],
        "trigger": "Passive"
    },
    {
        "tier": 2,
        "name": "African Penguin",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give three random friends +1 attack.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 2,
        "name": "Atlantic Puffin",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Deal 2 damage for each Strawberry friend to one random enemy.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Bat",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Make one random enemy Weak.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Beluga Sturgeon",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Summon one 2/3 Dolphin with Rice in the back.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Black Necked Stilt",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Gain +2 Trumpets.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Crab",
        "attack": 4,
        "health": 1,
        "level": 1,
        "ability": "Copy 50% of health from the most healthy friend.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Door Head Ant",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "If in battle, push this to the front and gain +4 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Empty Front Space"
    },
    {
        "tier": 2,
        "name": "Dove",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Give two Strawberry friends +2 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Dromedary",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give the two left-most shop pets +1 attack and +1 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 2,
        "name": "Flamingo",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Give the two nearest friends behind +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Frigatebird",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Remove ailment. Works 1 time per turn.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Friend gained ailment"
    },
    {
        "tier": 2,
        "name": "Gazelle",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +1 attack and +1 health until end of battle for each gold over 10.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 2,
        "name": "Guinea Pig",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Summon one 1/1 Guinea Pig.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 2,
        "name": "Hedgehog",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Deal 2 damage to all.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Hercules Beetle",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Give friends front-to-back +1 attack for each battle this has fought.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 2,
        "name": "Jellyfish",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +1 attack and +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Pet level-up"
    },
    {
        "tier": 2,
        "name": "Kangaroo",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend ahead attacks"
    },
    {
        "tier": 2,
        "name": "Koala",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give it +1 attack and +1 health. Works 1 time per turn.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friend hurt"
    },
    {
        "tier": 2,
        "name": "Lemur",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 2.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 2,
        "name": "Lizard",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Summon one 3/1 Lizard Tail. Works 2 times per turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 2,
        "name": "Mandrill",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Break friendly tier 2 or lower toy.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Panda",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give 50% of attack and health to the nearest friend ahead, then faint.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Peacock",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Gain +4 attack.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 2,
        "name": "Pug",
        "attack": 5,
        "health": 2,
        "level": 1,
        "ability": "Give friend ahead +1 experience.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Rat",
        "attack": 3,
        "health": 6,
        "level": 1,
        "ability": "Summon one 1/1 Dirty Rat up front for the opponent.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Robin",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Summon one 2/3 Nest with Egg perk.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Salamander",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "If it has a Start of battle ability, gain +2 attack.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friend bought"
    },
    {
        "tier": 2,
        "name": "Sea Turtle",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "If in battle, give it +3 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend Summoned"
    },
    {
        "tier": 2,
        "name": "Sea Urchin",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Remove 5 health from the first enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Shrimp",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give one random friend +1 health.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Friend sold"
    },
    {
        "tier": 2,
        "name": "Snail",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "If you lost last battle, give friends +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 2,
        "name": "Spider",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Summon one level 1 tier 3 pet as a 2/2.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Squid",
        "attack": 5,
        "health": 2,
        "level": 1,
        "ability": "Spend 1 Trumpet to give the first enemy Ink.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Stoat",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Summon one level 1 pet from your current tier as a 1/1.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 2,
        "name": "Stork",
        "attack": 2,
        "health": 1,
        "level": 1,
        "ability": "Summon one level 1 pet from the previous shop tier.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Swan",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Gain +1 gold.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 2,
        "name": "Tabby Cat",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Give friends +1 attack until end of battle.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Gain perk"
    },
    {
        "tier": 2,
        "name": "Toucan",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Copy food perk to the nearest friend behind.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 2,
        "name": "Wombat",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Copy Faint Ability as level 1 from the highest tier enemy.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 2,
        "name": "Worm",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Stock one 2-gold Apple.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 2,
        "name": "Yak",
        "attack": 3,
        "health": 5,
        "level": 1,
        "ability": "Deal 1 damage to itself and gain +1 attack.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Aardvark",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +2 attack and +2 health.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Enemy summoned"
    },
    {
        "tier": 3,
        "name": "Baboon",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give one random friend from the current shop tier +1 attack and + 2 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "End Turn"
    },
    {
        "tier": 3,
        "name": "Badger",
        "attack": 6,
        "health": 3,
        "level": 1,
        "ability": "Deal 50% attack damage to adjacent pets.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Before faint"
    },
    {
        "tier": 3,
        "name": "Bear",
        "attack": 3,
        "health": 5,
        "level": 1,
        "ability": "Give Honey Perk to all pets that are one space away.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Before faint"
    },
    {
        "tier": 3,
        "name": "Betta Fish",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give the nearest friend behind +4 attack and +2 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Blobfish",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give the nearest friend behind +1 attack and +1 health and +1 experience.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Before faint"
    },
    {
        "tier": 3,
        "name": "Camel",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give the nearest friend behind +2 attack and +2 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 3,
        "name": "Capybara",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Give unforzen shop pets +2 attack and +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Roll"
    },
    {
        "tier": 3,
        "name": "Cassowary",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "If this has a Strawberry friend, gain +1 attack and +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Clownfish",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give it +2 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friendly pet level-up"
    },
    {
        "tier": 3,
        "name": "Dodo",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Give 50% of attack to the nearest friend ahead.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 3,
        "name": "Dog",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +2 attack and +1 health until end of battle.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 3,
        "name": "Dolphin",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Deal 3 damage to the lowest health enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 3,
        "name": "Elephant",
        "attack": 3,
        "health": 7,
        "level": 1,
        "ability": "Deal 1 damage to the nearest friend behind.",
        "pack": [
            "Turtle"
        ],
        "trigger": "After attack"
    },
    {
        "tier": 3,
        "name": "Emperor Tamarin",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Give 33% attack and health to the leftmost shop pet.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 3,
        "name": "Flea",
        "attack": 3,
        "health": 1,
        "level": 1,
        "ability": "Make the most healthy enemy Weak.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Flying Fish",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "If in battle, give it +2 experience. Works 2 times per turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 3,
        "name": "Flying Squirrel",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Re-summon it and gain +1 attack.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Toy broke"
    },
    {
        "tier": 3,
        "name": "Giraffe",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give the nearest friend ahead +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Gold Fish",
        "attack": 1,
        "health": 5,
        "level": 1,
        "ability": "Increase sell value by 1 Gold.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Guineafowl",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Gain +2 Trumpets.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 3,
        "name": "Hatching Chick",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give the nearest friend ahead +4 attack and +4 health until end of battle.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Hoopoe Bird",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Deal 2 damage to the first and last enemy.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Leech",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Deal 1 damage to the nearest pet ahead and gain +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Meerkat",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give adjacent friends +1 attack for every 3 Gold spent this turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 3,
        "name": "Mole",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Remove the 3 nearest friendly perks to summon one 8/8 Mole.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Musk Ox",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Friend ahead faints: Gain +1 attack and +2 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend ahead faints"
    },
    {
        "tier": 3,
        "name": "Okapi",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Gain +1 attack and +1 health until end of battle. Works 5 times per turn.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Roll"
    },
    {
        "tier": 3,
        "name": "Osprey",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Summon one 2/1 Groundhog.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Owl",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Summon one level 1 Mouse.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 3,
        "name": "Ox",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Gain Melon perk and +1 attack.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend ahead faints"
    },
    {
        "tier": 3,
        "name": "Pangolin",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "If you have a toy, give the nearest friend behind +5 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Porcupine",
        "attack": 2,
        "health": 6,
        "level": 1,
        "ability": "Deal 3 damage directly back.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 3,
        "name": "Puppy",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 3.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 3,
        "name": "Rabbit",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give them +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friendly ate food"
    },
    {
        "tier": 3,
        "name": "Raccoon",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Steal held food from the nearest enemy ahead. Works 1 time per battle.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 3,
        "name": "Royal Flycatcher",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Deal 3 damage to one random enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Enemy summoned"
    },
    {
        "tier": 3,
        "name": "Sheep",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Summon two 2/2 Rams.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Starfish",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "If it had a Sell ability, give +1 attack and +1 health to one random friend.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friend sold"
    },
    {
        "tier": 3,
        "name": "Surgeon Fish",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Spend 2 Trumpets to give the nearest friend behing +6 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 3,
        "name": "Toad",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Make it weak. Works 2 times per battle.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Enemy hurt"
    },
    {
        "tier": 3,
        "name": "Tropical Fish",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give adjacent friends +1 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 3,
        "name": "Wasp",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Gain +50% attack.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Shop tier upgraded"
    },
    {
        "tier": 3,
        "name": "Weasel",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Gain +1 Gold on next turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 3,
        "name": "Woodpecker",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Deal 2 damage to the nearest two pets ahead.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Anteater",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Summon two level 1 Ants.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Bison",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "If this has a level 3 friend, gain +1 attack and +2 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Blowfish",
        "attack": 3,
        "health": 6,
        "level": 1,
        "ability": "Deal 3 damage to one random enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 4,
        "name": "Buffalo",
        "attack": 4,
        "health": 4,
        "level": 1,
        "ability": "Gain +2 attack and +2 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Three friends sold"
    },
    {
        "tier": 4,
        "name": "Caterpillar",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Gain +1 experience.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 4,
        "name": "Chameleon",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Activate friendly toy ability as level 1.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Crow",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Stock one Chocolate.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 4,
        "name": "Cuttlefish",
        "attack": 8,
        "health": 4,
        "level": 1,
        "ability": "Give the last enemy Ink.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Deer",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Summon one 5/5 Bus with Chili.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Doberman",
        "attack": 4,
        "health": 5,
        "level": 1,
        "ability": "If this is your lowest tier pet, gain Coconut Perk and +8 attack.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Donkey",
        "attack": 4,
        "health": 6,
        "level": 1,
        "ability": "Push the last enemy to the front. Works 1 time per battle.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 4,
        "name": "Dragonfly",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Give +1 attack and +1 health to one friend of each level.",
        "pack": [
            "Tiger"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Eel",
        "attack": 5,
        "health": 4,
        "level": 1,
        "ability": "Gain 50% health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Egyptian Vulture",
        "attack": 5,
        "health": 4,
        "level": 1,
        "ability": "Activate Faint ability on the nearest friend behind. Works 1 time a turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Knock out"
    },
    {
        "tier": 4,
        "name": "Falcon",
        "attack": 5,
        "health": 5,
        "level": 1,
        "ability": "Summon one 3/3 level 1 copy of it. Works 3 times per battle.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Knock out"
    },
    {
        "tier": 4,
        "name": "Gharial",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 4.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 4,
        "name": "Hawk",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Deal 7 damage to the opposite enemy.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Hippo",
        "attack": 4,
        "health": 5,
        "level": 1,
        "ability": "Gain +3 attack and +3 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Knock out"
    },
    {
        "tier": 4,
        "name": "Jerboa",
        "attack": 1,
        "health": 3,
        "level": 1,
        "ability": "Give friends +1 attack and +1 health. Works 2 times per turn.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Eats Apple"
    },
    {
        "tier": 4,
        "name": "Llama",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "If there in an empty space, gain +1 attack and +2 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Lobster",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "If outside battle, gain +2 attack and +2 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 4,
        "name": "Lynx",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "Deal damage to one random enemy equal to the sum of all friendly levels.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Manatee",
        "attack": 2,
        "health": 11,
        "level": 1,
        "ability": "Take 5 damage and give the nearest friend ahead +2 attack and +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Manta Ray",
        "attack": 5,
        "health": 4,
        "level": 1,
        "ability": "If there is an empty space, gain +2 gold next turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Microbe",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Make all pets weak.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Orangutan",
        "attack": 3,
        "health": 6,
        "level": 1,
        "ability": "Give the lowest health friendly pet +4 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Parrot",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Copy ability from the nearest pet ahead as level 1 until end of battle.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Pelican",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give one random Strawberry friend +2 attack and +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn & Start of battle"
    },
    {
        "tier": 4,
        "name": "Penguin",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give two level 2 or higher friends +1 attack and +1 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Platypus",
        "attack": 5,
        "health": 2,
        "level": 1,
        "ability": "Summon one level 1 Duck and Beaver.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 4,
        "name": "Poison Dart Frog",
        "attack": 5,
        "health": 2,
        "level": 1,
        "ability": "Deal 3 damage to the highest health enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend ahead faints"
    },
    {
        "tier": 4,
        "name": "Praying Mantis",
        "attack": 7,
        "health": 2,
        "level": 1,
        "ability": "Knock out adjacent friends and gain +2 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 4,
        "name": "Saiga Antelope",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Gain +1 trumpet.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 4,
        "name": "Seagull",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Copy this pet's food perk to it. Works 1 time per turn.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 4,
        "name": "Sealion",
        "attack": 3,
        "health": 6,
        "level": 1,
        "ability": "Give friends behind +1 attack and friends ahead +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 4,
        "name": "Secretary Bird",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Give the nearest friend ahead +3 attack and +3 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Two friends faint"
    },
    {
        "tier": 4,
        "name": "Skunk",
        "attack": 3,
        "health": 5,
        "level": 1,
        "ability": "Reduce the highest health enemy by 33% health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Slug",
        "attack": 4,
        "health": 4,
        "level": 1,
        "ability": "Summon one 2/2 Smaller Slug that summons one 1/1 Smallest Slug.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Squirrel",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Discount all shop food by 1 gold.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 4,
        "name": "Tahr",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "Give Chili Perk to the nearest friend behind.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Turtle",
        "attack": 2,
        "health": 5,
        "level": 1,
        "ability": "Give Melon Perk to the nearest friend behind.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Vaquita",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Gain +50% trumpets.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 4,
        "name": "Whale",
        "attack": 3,
        "health": 8,
        "level": 1,
        "ability": "Swallow the nearest friend ahead and summon a new level 1 after fainting.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 4,
        "name": "Whale Shark",
        "attack": 1,
        "health": 4,
        "level": 1,
        "ability": "Remove it and gain +2 attack and +2 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Gain perk or ailment"
    },
    {
        "tier": 5,
        "name": "Alpaca",
        "attack": 3,
        "health": 7,
        "level": 1,
        "ability": "Give it +1 experience. Works 1 time per turn.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 5,
        "name": "Armadillo",
        "attack": 2,
        "health": 6,
        "level": 1,
        "ability": "Give ALL pets +8 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Axolotl",
        "attack": 2,
        "health": 3,
        "level": 1,
        "ability": "Give it permanent +1 attack and +1 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Friend gained perk"
    },
    {
        "tier": 5,
        "name": "Beluga Whale",
        "attack": 3,
        "health": 8,
        "level": 1,
        "ability": "Swallow the left-most shop pet and release it as level 1 after fainting.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Eats food"
    },
    {
        "tier": 5,
        "name": "Blue Ringed Octopus",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give friends +1 attack and +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 5,
        "name": "Chicken",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Give future shop pets permanent +1 attack and +1 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Cockatoo",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Give three random Faint friends +2 attack and +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 5,
        "name": "Cow",
        "attack": 4,
        "health": 6,
        "level": 1,
        "ability": "Replace food shop with 2 free Milk that gives +1 attack and +2 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 5,
        "name": "Crane",
        "attack": 9,
        "health": 2,
        "level": 1,
        "ability": "Give it Melon Perk and +5 attack. Works 1 time per turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend ahead hurt"
    },
    {
        "tier": 5,
        "name": "Crocodile",
        "attack": 8,
        "health": 4,
        "level": 1,
        "ability": "Deal 8 damage to the last enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Eagle",
        "attack": 6,
        "health": 5,
        "level": 1,
        "ability": "Summon one 5/5 level 1 pet from the next shop tier.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Emu",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Push nearest friend ahead to the front and give it +4 health in battle.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Empty front space"
    },
    {
        "tier": 5,
        "name": "Fire Ant",
        "attack": 6,
        "health": 4,
        "level": 1,
        "ability": "Give attack to one random friend.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Fox",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "Steal one random shop food.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Goat",
        "attack": 4,
        "health": 6,
        "level": 1,
        "ability": "Gain +1 gold. Works 2 times per turn.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Friend bought"
    },
    {
        "tier": 5,
        "name": "Hamster",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Gain +1 gold. Works 2 times per turn.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Roll"
    },
    {
        "tier": 5,
        "name": "Hyena",
        "attack": 5,
        "health": 5,
        "level": 1,
        "ability": "Swap attack and health of all pets.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Lion",
        "attack": 6,
        "health": 6,
        "level": 1,
        "ability": "If this is your highest tier pet, gain +50% attack and health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Macaque",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Summon one 12/12 Orangutan with the same food perk as this.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Monkey",
        "attack": 1,
        "health": 2,
        "level": 1,
        "ability": "Give right-most friend +2 attack and +3 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Moose",
        "attack": 5,
        "health": 6,
        "level": 1,
        "ability": "Unfreeze shop and give one random friend +3  for each tier 1 shop pet.",
        "pack": [
            "Tiger"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Mosasaurus",
        "attack": 5,
        "health": 6,
        "level": 1,
        "ability": "Give adjacent friends +3 attack and +3 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Toy broke"
    },
    {
        "tier": 5,
        "name": "Nurse Shark",
        "attack": 4,
        "health": 6,
        "level": 1,
        "ability": "Spend up to 6 trumpets and deal triple as damage to one random enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Nyala",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Gain +8 trumpets.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Panther",
        "attack": 3,
        "health": 5,
        "level": 1,
        "ability": "Perks are two times stronger on this",
        "pack": [
            "Puppy"
        ],
        "trigger": "Passive"
    },
    {
        "tier": 5,
        "name": "Polar Bear",
        "attack": 4,
        "health": 8,
        "level": 1,
        "ability": "Give one random frozen shop pet +4 attack and +4 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 5,
        "name": "Poodle",
        "attack": 2,
        "health": 2,
        "level": 1,
        "ability": "Give +1 attack and +1 health to one friend of each tier.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Rhino",
        "attack": 6,
        "health": 9,
        "level": 1,
        "ability": "Deal 4 damage to the first enemy. Double against tier 1 pets.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Knock out"
    },
    {
        "tier": 5,
        "name": "Rooster",
        "attack": 6,
        "health": 4,
        "level": 1,
        "ability": "Summon one Chick with 1 health and 50% attack of this.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Scorpion",
        "attack": 1,
        "health": 1,
        "level": 1,
        "ability": "Gain Peanut perk.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Summoned"
    },
    {
        "tier": 5,
        "name": "Seal",
        "attack": 3,
        "health": 8,
        "level": 1,
        "ability": "Give three random friends +1 attack.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Eats food"
    },
    {
        "tier": 5,
        "name": "Shark",
        "attack": 4,
        "health": 2,
        "level": 1,
        "ability": "Gain +1 attack and +2 health. Double out of battle.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 5,
        "name": "Shoebill",
        "attack": 2,
        "health": 4,
        "level": 1,
        "ability": "Give Strawberry friend +1 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Siberian Husky",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Give with no held food +1 attack and +1 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 5,
        "name": "Silver Fox",
        "attack": 3,
        "health": 6,
        "level": 1,
        "ability": "Gain +1 gold on next turn. Works 3 times per battle.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 5,
        "name": "Snapping Turtle",
        "attack": 4,
        "health": 5,
        "level": 1,
        "ability": "Give Skewer Perk to the nearest friend behind.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Sting Ray",
        "attack": 4,
        "health": 6,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 5.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 5,
        "name": "Stonefish",
        "attack": 7,
        "health": 4,
        "level": 1,
        "ability": "Deal attack damage directly back to whoever knocked this out.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Sword Fish",
        "attack": 5,
        "health": 5,
        "level": 1,
        "ability": "Deal 100% attack damage to the most healthy enemy and itself.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 5,
        "name": "Triceratops",
        "attack": 5,
        "health": 6,
        "level": 1,
        "ability": "Give one random friend +3 attack and +3 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 5,
        "name": "Turkey",
        "attack": 3,
        "health": 4,
        "level": 1,
        "ability": "Give it +2 attack and +3 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 5,
        "name": "Vulture",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Deal 4 damage to one random enemy.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Two friends faint"
    },
    {
        "tier": 5,
        "name": "Wolf",
        "attack": 4,
        "health": 4,
        "level": 1,
        "ability": "Summon three 3/2 Pigs.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 5,
        "name": "Zebra",
        "attack": 3,
        "health": 5,
        "level": 1,
        "ability": "Give one random friend +2 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Buy & Sell"
    },
    {
        "tier": 6,
        "name": "Anglerfish",
        "attack": 7,
        "health": 4,
        "level": 1,
        "ability": "Choose one free pet from your last opponent to stock.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 6,
        "name": "Bird of Paradise",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Give three random friends +1 attack and +1 health.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Spend 7 gold"
    },
    {
        "tier": 6,
        "name": "Boar",
        "attack": 10,
        "health": 6,
        "level": 1,
        "ability": "Gain +4 attack and +2 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 6,
        "name": "Cat",
        "attack": 4,
        "health": 5,
        "level": 1,
        "ability": "Food gives double health and attack. Works 2 times per turn.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Passive"
    },
    {
        "tier": 6,
        "name": "Catfish",
        "attack": 3,
        "health": 3,
        "level": 1,
        "ability": "Spend 1 gold to activate Buy ability on the nearest friend ahead.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 6,
        "name": "Cobra",
        "attack": 12,
        "health": 6,
        "level": 1,
        "ability": "Deal 20% attack damage to one random enemy.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend ahead attacks"
    },
    {
        "tier": 6,
        "name": "Dragon",
        "attack": 6,
        "health": 8,
        "level": 1,
        "ability": "Give friends +1 attack and +1 health.",
        "pack": [
            "Turtle",
            "Puppy"
        ],
        "trigger": "Tier 1 friend bought"
    },
    {
        "tier": 6,
        "name": "Elephant Seal",
        "attack": 3,
        "health": 9,
        "level": 1,
        "ability": "Give friends +1 attack and +1 health. Double in battle.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Gain perk"
    },
    {
        "tier": 6,
        "name": "Fly",
        "attack": 5,
        "health": 5,
        "level": 1,
        "ability": "Summon one 4/4 Zombie Fly in its place. Works 3 times per turn.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 6,
        "name": "German Shepherd",
        "attack": 10,
        "health": 4,
        "level": 1,
        "ability": "Give 25% of attack to it until end of battle.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend summoned"
    },
    {
        "tier": 6,
        "name": "Gorilla",
        "attack": 7,
        "health": 10,
        "level": 1,
        "ability": "Gain Coconut 1 time per battle.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 6,
        "name": "Grizzly Bear",
        "attack": 6,
        "health": 6,
        "level": 1,
        "ability": "Deal 6 damage to two random enemies.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Five friendly attacks"
    },
    {
        "tier": 6,
        "name": "Hammerhead Shark",
        "attack": 5,
        "health": 5,
        "level": 1,
        "ability": "If this has a level 3 friend, gain +3 gold.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of turn"
    },
    {
        "tier": 6,
        "name": "Highland Cow",
        "attack": 4,
        "health": 12,
        "level": 1,
        "ability": "Gain +1 trumpet for each 3 health this has.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Komodo",
        "attack": 6,
        "health": 6,
        "level": 1,
        "ability": "Give friends ahead +1 attack and +1 health and then shuffle their positions.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 6,
        "name": "Leopard",
        "attack": 10,
        "health": 4,
        "level": 1,
        "ability": "Deal 50% attack damage to one random enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Lioness",
        "attack": 4,
        "health": 5,
        "level": 1,
        "ability": "Give current and future shop pets +2 attack and +2 health.",
        "pack": [
            "Tiger"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 6,
        "name": "Lionfish",
        "attack": 8,
        "health": 4,
        "level": 1,
        "ability": "Deal 4 damage to one random enemy. Repeat for each 10 attack this has.",
        "pack": [
            "Puppy",
            "Tiger"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "Mammoth",
        "attack": 3,
        "health": 10,
        "level": 1,
        "ability": "Give all friends +2 attack and +2 health.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "Mantis Shrimp",
        "attack": 9,
        "health": 3,
        "level": 1,
        "ability": "Deal 10 damage to the first enemy.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Mongoose",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Choose one level 1 toy from tier 6.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Buy"
    },
    {
        "tier": 6,
        "name": "Octopus",
        "attack": 8,
        "health": 8,
        "level": 1,
        "ability": "Deal 6 damage to one random enemy.",
        "pack": [
            "Puppy"
        ],
        "trigger": "After attack"
    },
    {
        "tier": 6,
        "name": "Orca",
        "attack": 4,
        "health": 8,
        "level": 1,
        "ability": "Summon one random pet with Faint ability from any pack.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "Ostrich",
        "attack": 2,
        "health": 8,
        "level": 1,
        "ability": "Gain +1 attack and +1 health for every tier 5 pet or higher in the shop.",
        "pack": [
            "Starfish"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 6,
        "name": "Oyster",
        "attack": 2,
        "health": 10,
        "level": 1,
        "ability": "Gain +3 gold.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Sell"
    },
    {
        "tier": 6,
        "name": "Piranha",
        "attack": 10,
        "health": 2,
        "level": 1,
        "ability": "Give friends +3 attack.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 6,
        "name": "Pteranodon",
        "attack": 5,
        "health": 3,
        "level": 1,
        "ability": "If it was a Faint pet, activate its ability again. Works 1 time per turn.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 6,
        "name": "Puma",
        "attack": 6,
        "health": 5,
        "level": 1,
        "ability": "Friendly toy repeats its ability as level 1.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Passive"
    },
    {
        "tier": 6,
        "name": "Reindeer",
        "attack": 6,
        "health": 4,
        "level": 1,
        "ability": "Gain Melon. Works 1 time per battle.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 6,
        "name": "Sabertooth Tiger",
        "attack": 8,
        "health": 6,
        "level": 1,
        "ability": "Summon one random tier 1 pet as a 6/6.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Hurt"
    },
    {
        "tier": 6,
        "name": "Sauropod",
        "attack": 4,
        "health": 12,
        "level": 1,
        "ability": "Gain +1 gold. Works 3 times per turn.",
        "pack": [
            "Puppy"
        ],
        "trigger": "Shop food bought"
    },
    {
        "tier": 6,
        "name": "Snake",
        "attack": 6,
        "health": 6,
        "level": 1,
        "ability": "Deal 5 damage to one random enemy.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Friend ahead attacks"
    },
    {
        "tier": 6,
        "name": "Spinosaurus",
        "attack": 4,
        "health": 8,
        "level": 1,
        "ability": "Give one random friend +3 attack and +2 health.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Friend faints"
    },
    {
        "tier": 6,
        "name": "Stegosaurus",
        "attack": 3,
        "health": 8,
        "level": 1,
        "ability": "Give one random friend without held food +1 attack and +1 health until end of battle. Multiply with turn number.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Tapir",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Summon one level 1 copy of a random friendly pet. Except other Tapirs!",
        "pack": [
            "Tiger"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "Tiger",
        "attack": 6,
        "health": 4,
        "level": 1,
        "ability": "The friend ahead repeats their ability in battle as if they were level 1.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Passive"
    },
    {
        "tier": 6,
        "name": "Tyrannosaurus",
        "attack": 6,
        "health": 4,
        "level": 1,
        "ability": "Give all tier 5 friends or higher +2 attack and +1 health.",
        "pack": [
            "Puppy"
        ],
        "trigger": "End turn"
    },
    {
        "tier": 6,
        "name": "Velociraptor",
        "attack": 3,
        "health": 2,
        "level": 1,
        "ability": "Give Coconut to one random Strawberry friend.",
        "pack": [
            "Starfish"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Walrus",
        "attack": 7,
        "health": 5,
        "level": 1,
        "ability": "Give one random friend Peanuts.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "Warthog",
        "attack": 9,
        "health": 6,
        "level": 1,
        "ability": "Give random friends +1 attack and +1 health for every 3 attack this has.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Faint"
    },
    {
        "tier": 6,
        "name": "White Tiger",
        "attack": 4,
        "health": 3,
        "level": 1,
        "ability": "Make the nearest friend behind +3 experience.",
        "pack": [
            "Tiger"
        ],
        "trigger": "Start of battle"
    },
    {
        "tier": 6,
        "name": "Wildebeest",
        "attack": 8,
        "health": 6,
        "level": 1,
        "ability": "Spend 4 trumpets to gain Coconut. Works 1 time per battle.",
        "pack": [
            "Golden Retriever"
        ],
        "trigger": "Before attack"
    },
    {
        "tier": 6,
        "name": "Wolverine",
        "attack": 5,
        "health": 4,
        "level": 1,
        "ability": "Adjacent friendly abilities deal 3 damage extra.",
        "pack": [
            "Turtle"
        ],
        "trigger": "Passive"
    }
]


const dataTypes = ['name','tier','attack','health','pack','trigger']
