class User < ApplicationRecord
    has_many :games
    has_many :consoles, through: :games
    has_many :genres, through: :games

    has_secure_password

    validates :username, presence: true, uniqueness: true
end