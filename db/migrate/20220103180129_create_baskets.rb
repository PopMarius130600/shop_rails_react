class CreateBaskets < ActiveRecord::Migration[6.1]
  def change
    create_table :baskets do |t|
      t.float :total_price
      t.timestamps
    end
  end
end
