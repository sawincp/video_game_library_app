
puts "🌱 Seeding..."

consoles = [
    { platform: "PlayStation 5" },
    { platform: "Xbox Series X" },
    { platform: "Nintendo Switch" }
  ]
  Console.create(consoles)
  
  # Seed genres
  genres = [
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
    { title: "Starfield", cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Bethesda_Starfield.jpg/220px-Bethesda_Starfield.jpg", release_date: Date.new(2022, 2, 25), notes: "Souls-like action RPG", user_id: 1, console_id: 1, genre_id: 1 },
    { title: "God of War Ragnarok", cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg/220px-God_of_War_Ragnar%C3%B6k_cover.jpg", release_date: Date.new(2022, 11, 9), notes: "Action-adventure sequel", user_id: 2, console_id: 1, genre_id: 1 },
    { title: "The Legend of Zelda: Breath of the Wild 2", cover_art: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg", release_date: Date.new(2023, 3, 3), notes: "Open-world adventure", user_id: 1, console_id: 3, genre_id: 2 }
  ]
  Game.create(games)

# Console.create!([
#     {platform: "Playstation 5"},
#     {platform: "Xbox Series X"},
#     {platform: "Nintendo Switch"},
#     {platform: "PC"},
#     {platform: "Playstation 4"}
# ])

# Genre.create!([
#     {genre_type: "Action Adventure"},
#     {genre_type: "RPG"},
#     {genre_type: "Puzzle"},
#     {genre_type: "Fighting"},
#     {genre_type: "Sports"}
# ])

# Game.create!([
#     {
#         title: "God of War Ragnarök", 
#         cover_art: "images/god_of_war_jpeg", 
#         release_date: "2022-11-09", 
#         notes:"",
#         user_id: nil,
#         console_id: nil,
#         genre_id: nil,

#     },
#     {
#         title: "Legend of Zelda: Breath of the Wild", 
#         cover_art: "images/zelda.jpeg",
#         release_date: "2017-03-03", 
#         notes:"",
#         user_id: nil,
#         console_id: nil,
#         genre_id: nil,
# },
#     {
#         title: "Starfield", 
#         cover_art: "images/starfied.jpeg", 
#         release_date: "2023-09-06", 
#         notes:"",
#         user_id: nil,
#         console_id: nil,
#         genre_id: nil,
#     },
#     {
#         title: "Horizon Forbidden West", 
#         cover_art: "images/horizon.jpeg", 
#         release_date: "2022-02-18", 
#         notes:"",
#         user_id: nil,
#         console_id: nil,
#         genre_id: nil,
#     },
#     {
#         title: "Lies of P", 
#         cover_art:"images/lies_of_p.jpeg", 
#         release_date:"2023-09-19", 
#         notes:"",
#         user_id: nil,
#         console_id: nil,
#         genre_id: nil,
#     }
# ])

puts "✅ Done seeding!"