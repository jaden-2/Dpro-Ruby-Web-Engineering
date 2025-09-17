class Post < ApplicationRecord
  validates :creator, :content, presence: true
  validates :content, length: {in: 1..140, too_short: "Cannot make an empty post", too_long: "Post cannot be longer than 140 characters"}
  
end
