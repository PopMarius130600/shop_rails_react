class CreateItemLists < ActiveRecord::Migration[6.1]
  def change
    create_table :item_lists do |t|
      t.integer :productCount
      t.float :price
      t.timestamps
    end
  end
end
