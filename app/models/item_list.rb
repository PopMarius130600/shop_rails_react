class ItemList < ApplicationRecord
  has_one :user
  has_one :item
end
