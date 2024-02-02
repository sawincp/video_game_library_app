
puts "🌱 Seeding..."

consoles = [
  { platform: "Choose Console" },  # 1. Default option
  { platform: "PlayStation 5" },  #2
  { platform: "Xbox Series X" }, #3
  { platform: "Nintendo Switch" }, #4
  { platform: "Super Nintendo" }, #5
  { platform: "Xbox" }, #6
  { platform: "N64 "} #7
]
Console.create(consoles)

# Seed genres with a default placeholder option
genres = [
  { genre_type: "Choose Genre" },  #1 Default option
  { genre_type: "Action" },        #2
  { genre_type: "Adventure" },     #3
  { genre_type: "Role-Playing" },  #4
  { genre_type: "Side Scroller "},  #5
  { genre_type: "First-Person Shooter"}  #6
]
Genre.create(genres)
  
  # Seed users
  users = [
    { username: "user1", 
      password_digest: BCrypt::Password.create("password1") 
    }, #1
    
    { 
      username: "user2", 
      password_digest: BCrypt::Password.create("password2") 
    }, #2

    { 
      username: "user3", 
      password_digest: BCrypt::Password.create("password3") 
    }, #3

    { 
      username: "user4", 
      password_digest: BCrypt::Password.create("password4") 
    }, #4

  ]
  User.create(users)
  
  # Seed games (referencing existing consoles, genres, and users)
  games = [
    { title: "STARFIELD", 
      cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Bethesda_Starfield.jpg/220px-Bethesda_Starfield.jpg", 
      release_date: Date.new(2022, 2, 25), 
      notes: "Souls-like action RPG", 
      user_id: 1, 
      console_id: 3, 
      genre_id: 4 
    },
    
      { title: "GOD OF WAR RAGNAROK", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg/220px-God_of_War_Ragnar%C3%B6k_cover.jpg", 
        release_date: Date.new(2022, 11, 9), 
        notes: "Action-adventure sequel", 
        user_id: 2, 
        console_id: 2, 
        genre_id: 3 
      },
    
      { title: "THE LEGEND OF ZELDA: BREATH OF THE WILD", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg", 
        release_date: Date.new(2023, 3, 3), 
        notes: "Game of the year, no questions asked", 
        user_id: 1, 
        console_id: 4, 
        genre_id: 3 
      }, 

      { title: "SUPER MARIO WORLD", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Super_Mario_World_Coverart.png/220px-Super_Mario_World_Coverart.png", 
        release_date: Date.new(1991, 8, 23), 
        notes: "Still the best Mario game out there", 
        user_id: 3, 
        console_id: 5, 
        genre_id: 5
      },

      { title: "HALO: COMBAT EVOLVED", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg", 
        release_date: Date.new(2001, 11, 15), 
        notes: "Started my love for shooter games!", 
        user_id: 4, 
        console_id: 6, 
        genre_id: 6
      },


      { title: "THE LEGEND OF ZELDA: OCARINA OF TIME", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg/220px-The_Legend_of_Zelda_Ocarina_of_Time.jpg", 
        release_date: Date.new(1998, 11, 21), 
        notes: "The original and best Zelda game!", 
        user_id: 2, 
        console_id: 7, 
        genre_id: 3
      },


  ]
  Game.create(games)

puts "✅ Done seeding!"