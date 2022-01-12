class Order < ApplicationRecord
  has_many :item_lists
  has_many :items, through: :item_lists
  belongs_to :user
end
