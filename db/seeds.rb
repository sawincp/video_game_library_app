
puts "🌱 Seeding..."

Console.create!([
    {platform: "Playstation 5"},
    {platform: "Xbox Series X"},
    {platform: "Nintendo Switch"},
    {platform: "PC"},
    {platform: "Playstation 4"}
])

Genre.create!([
    {genre_type: "Action Adventure"},
    {genre_type: "RPG"},
    {genre_type: "Puzzle"},
    {genre_type: "Fighting"},
    {genre_type: "Sports"}
])

Game.create!([
    {title: "God of War Ragnarök", cover_art: "images/god_of_war_jpeg", release_date: "2022-11-09", notes:""},
    {title: "Legend of Zelda: Breath of the Wild", cover_art: "images/zelda.jpeg", release_date: "2017-03-03", notes:""},
    {title: "Starfield", cover_art: "images/starfied.jpeg", release_date: "2023-09-06", notes:""},
    {title: "Horizon Forbidden West", cover_art: "images/horizon.jpeg", release_date: "2022-02-18", notes:""},
    {title: "Lies of P", cover_art:"images/lies_of_p.jpeg", release_date:"2023-09-19", notes:""}
])

puts "✅ Done seeding!"