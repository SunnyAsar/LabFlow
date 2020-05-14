# frozen_string_literal: true

class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills, id: :uuid do |t|
      t.string :name, null: false
      t.references :user, type: :uuid, null: false, foreign_key: true
      t.references :patient, type: :uuid, null: false, foreign_key: true
      t.integer :bill_total, default: 0
      t.integer :paid_amount, default: 0
      t.boolean :payment_status, default: false

      t.timestamps
    end
  end
end
