class Genre < ApplicationRecord
    has_many :games
    has_many :users, through: :games
    has_many :consoles, through: :games

    validates :type, presence: true
end