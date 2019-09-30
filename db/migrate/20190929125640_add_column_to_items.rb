class AddColumnToItems < ActiveRecord::Migration[5.2]
  def change
    add_reference :items, :category, foreign_key: true
    add_reference :items, :size, foreign_key: true
    add_reference :items, :burden, foreign_key: true
  end
end
