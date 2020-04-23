# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone, null: false
      t.datetime :dob
      t.integer :gender, null: false
      t.text :role, array: true, null: false, default: []
      t.text :address
      t.datetime :start_date, null: false, default: -> { 'CURRENT_TIMESTAMP' }
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
