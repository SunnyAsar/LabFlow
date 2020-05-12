# frozen_string_literal: true

class AddBillIdToSample < ActiveRecord::Migration[6.0]
  def change
    add_reference :samples, :bill, type: :uuid, null: true, foreign_key: true
  end
end
