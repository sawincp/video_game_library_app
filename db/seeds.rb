
puts "🌱 Seeding..."

consoles = [
  { platform: "Choose Console" },  # Default option
  { platform: "PlayStation 5" },
  { platform: "Xbox Series X" },
  { platform: "Nintendo Switch" }
]
Console.create(consoles)

# Seed genres with a default placeholder option
genres = [
  { genre_type: "Choose Genre" },  # Default option
  { genre_type: "Action" },
  { genre_type: "Adventure" },
  { genre_type: "Role-Playing" }
]
Genre.create(genres)
  
  # Seed users
  users = [
    { username: "user1", password_digest: BCrypt::Password.create("password1") },
    { username: "user2", password_digest: BCrypt::Password.create("password2") }
  ]
  User.create(users)
  
  # Seed games (referencing existing consoles, genres, and users)
  games = [
    { title: "Starfield", 
      cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Bethesda_Starfield.jpg/220px-Bethesda_Starfield.jpg", 
      release_date: Date.new(2022, 2, 25), 
      notes: "Souls-like action RPG", 
      user_id: 1, 
      console_id: 3, 
      genre_id: 4 
    },
    
      { title: "God of War Ragnarok", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg/220px-God_of_War_Ragnar%C3%B6k_cover.jpg", 
        release_date: Date.new(2022, 11, 9), 
        notes: "Action-adventure sequel", 
        user_id: 2, 
        console_id: 2, 
        genre_id: 3 
      },
    
      { title: "The Legend of Zelda: Breath of the Wild 2", 
        cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg", 
        release_date: Date.new(2023, 3, 3), 
        notes: "Open-world adventure", 
        user_id: 1, 
        console_id: 4, 
        genre_id: 3 
      }
  ]
  Game.create(games)

puts "✅ Done seeding!"