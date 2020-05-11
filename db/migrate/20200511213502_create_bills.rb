# frozen_string_literal: true

class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills, id: :uuid do |t|
      t.string :name, null: false
      t.references :user, null: false, foreign_key: true
      t.references :patient, null: false, foreign_key: true
      t.decimal :bill_total, default: 0
      t.decimal :paid_amount, default: 0
      t.boolean :payment_status, default: false

      t.timestamps
    end
  end
end
