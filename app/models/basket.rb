class Basket < ApplicationRecord
  has_many :item_lists
  has_many :items, through: :item_lists

  def total_amount
    sum = 0
    self.item_lists.each do |list_item|
      sum += list_item.total_price
    end
  end

end
