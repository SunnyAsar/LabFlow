class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests, id: :uuid do |t|
      t.string :name, null: false, default: ''
      t.text :description
      t.decimal :amount, default: 0.0, null: false
      t.datetime :processing_time, null: false
      t.references :user, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
