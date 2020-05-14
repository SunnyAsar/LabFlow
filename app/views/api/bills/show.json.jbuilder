# frozen_string_literal: true

json.partial! 'api/bills/bill', bill: @bill
json.samples do
  json.partial! 'api/samples/sample', collection: @bill.samples, as: :sample
end
