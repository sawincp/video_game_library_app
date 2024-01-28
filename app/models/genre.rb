class Genre < ApplicationRecord
    has_many :games
    has_many :users, through: :games
    has_many :consoles, through: :games

    validates :genre_type, presence: true, allow_blank: true
end