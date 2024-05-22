const games = [
    { 
        id: 1, 
        name: 'Super Mario Bros', 
        genre: 'Plataforma', 
        description: 'Clásico juego de plataformas de Nintendo.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png' 
    },
    { 
        id: 2, 
        name: 'The Legend of Zelda: Breath of the Wild', 
        genre: 'Aventura', 
        description: 'Juego de aventuras de mundo abierto de la franquicia Zelda.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg' 
    },
    { 
        id: 3, 
        name: 'Overwatch', 
        genre: 'FPS', 
        description: 'Juego de disparos en equipo de Blizzard Entertainment.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg' 
    },
    { 
        id: 4, 
        name: 'Minecraft', 
        genre: 'Sandbox', 
        description: 'Juego de construcción y aventuras en un mundo abierto.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg' 
    },
    { 
        id: 5, 
        name: 'Grand Theft Auto V', 
        genre: 'Acción', 
        description: 'Juego de mundo abierto con elementos de acción y aventura.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg' 
    },
    { 
        id: 6, 
        name: 'Red Dead Redemption 2', 
        genre: 'Aventura', 
        description: 'Juego de mundo abierto desarrollado por Rockstar Games.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg' 
    },
    { 
        id: 7, 
        name: 'FIFA 22', 
        genre: 'Deportes', 
        description: 'Videojuego de simulación de fútbol desarrollado por EA Sports.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/FIFA_22_cover_art.jpg' 
    },
    { 
        id: 8, 
        name: 'The Witcher 3: Wild Hunt', 
        genre: 'RPG', 
        description: 'Juego de rol de mundo abierto desarrollado por CD Projekt Red.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/The_Witcher_3_cover_art.jpg' 
    },
    { 
        id: 9, 
        name: 'Call of Duty: Warzone', 
        genre: 'Battle Royale', 
        description: 'Juego de disparos en línea gratuito desarrollado por Infinity Ward.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Call_of_Duty_Warzone_cover_art.jpg' 
    },
    { 
        id: 10, 
        name: 'Fortnite', 
        genre: 'Battle Royale', 
        description: 'Juego de supervivencia en línea desarrollado por Epic Games.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Fortnite_cover_art.jpg' 
    },
    { 
        id: 11, 
        name: 'Among Us', 
        genre: 'Multijugador', 
        description: 'Juego de engaño y estrategia en línea desarrollado por InnerSloth.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Among_Us_cover_art.jpg' 
    },
    { 
        id: 12, 
        name: 'League of Legends', 
        genre: 'MOBA', 
        description: 'Juego de estrategia en línea desarrollado por Riot Games.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/League_of_Legends_cover_art.jpg' 
    },
    { 
        id: 13, 
        name: 'Doom Eternal', 
        genre: 'FPS', 
        description: 'Juego de disparos en primera persona desarrollado por id Software.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Doom_Eternal_cover_art.jpg' 
    },
    { 
        id: 14, 
        name: 'Assassin\'s Creed Valhalla', 
        genre: 'Aventura', 
        description: 'Juego de acción y aventuras desarrollado por Ubisoft.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Assassins_Creed_Valhalla_cover_art.jpg' 
    },
    { 
        id: 15, 
        name: 'Cyberpunk 2077', 
        genre: 'RPG', 
        description: 'Juego de rol de acción desarrollado por CD Projekt Red.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Cyberpunk_2077_cover_art.jpg' 
    },
    { 
        id: 16, 
        name: 'Rocket League', 
        genre: 'Deportes', 
        description: 'Juego de deportes y vehículos desarrollado por Psyonix.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Rocket_League_cover_art.jpg' 
    },
    { 
        id: 17, 
        name: 'Counter-Strike: Global Offensive', 
        genre: 'FPS', 
        description: 'Juego de disparos en línea desarrollado por Valve Corporation.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Counter-Strike_Global_Offensive_cover_art.jpg' 
    },
    { 
        id: 18, 
        name: 'Rainbow Six Siege', 
        genre: 'FPS', 
        description: 'Juego de disparos táctico en equipo desarrollado por Ubisoft.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Rainbow_Six_Siege_cover_art.jpg' 
    },
    { 
        id: 19, 
        name: 'Animal Crossing: New Horizons', 
        genre: 'Simulación', 
        description: 'Juego de simulación de vida desarrollado por Nintendo.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Animal_Crossing_New_Horizons_cover_art.jpg' 
    },
    { 
        id: 20, 
        name: 'Valorant', 
        genre: 'FPS', 
        description: 'Juego de disparos táctico en línea desarrollado por Riot Games.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Valorant_cover_art.jpg' 
    },
    { 
        id: 21, 
        name: 'Genshin Impact', 
        genre: 'RPG', 
        description: 'Juego de rol de acción y aventuras desarrollado por miHoYo.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Genshin_Impact_cover_art.jpg' 
    },
    { 
        id: 22, 
        name: 'Apex Legends', 
        genre: 'Battle Royale', 
        description: 'Juego de disparos en línea gratuito desarrollado por Respawn Entertainment.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Apex_Legends_cover_art.jpg' 
    },
    { 
        id: 23, 
        name: 'Hades', 
        genre: 'RPG', 
        description: 'Juego de acción y roguelike desarrollado por Supergiant Games.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Hades_cover_art.jpg' 
    },
    { 
        id: 24, 
        name: 'Monster Hunter: World', 
        genre: 'RPG', 
        description: 'Juego de acción y caza de monstruos desarrollado por Capcom.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Monster_Hunter_World_cover_art.jpg' 
    },
    { 
        id: 25, 
        name: 'Terraria', 
        genre: 'Sandbox', 
        description: 'Juego de aventuras y construcción en un mundo generado procedimentalmente.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Terraria_cover_art.jpg' 
    },
    { 
        id: 26, 
        name: 'Dark Souls III', 
        genre: 'RPG', 
        description: 'Juego de rol de acción desarrollado por FromSoftware.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Dark_Souls_III_cover_art.jpg' 
    },
    { 
        id: 27, 
        name: 'Tom Clancy\'s The Division 2', 
        genre: 'Shooter', 
        description: 'Juego de disparos en línea desarrollado por Ubisoft.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Tom_Clancys_The_Division_2_cover_art.jpg' 
    },
    { 
        id: 28, 
        name: 'Rust', 
        genre: 'Sandbox', 
        description: 'Juego de supervivencia en línea con elementos de construcción y combate.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Rust_cover_art.jpg' 
    },
    { 
        id: 29, 
        name: 'Half-Life: Alyx', 
        genre: 'VR', 
        description: 'Juego de realidad virtual desarrollado por Valve Corporation.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Half-Life_Alyx_cover_art.jpg' 
    },
    { 
        id: 30, 
        name: 'Resident Evil Village', 
        genre: 'Survival Horror', 
        description: 'Juego de terror y supervivencia desarrollado por Capcom.', 
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Resident_Evil_Village_cover_art.jpg' 
    }
];


module.exports = { games };