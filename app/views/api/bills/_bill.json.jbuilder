# frozen_string_literal: true

json.id bill.id
json.name bill.name
json.user_id bill.user_id
json.patient_id bill.patient_id
json.paid_amount bill.paid_amount
json.payment_status bill.payment_status
json.created_at bill.created_at
json.updated_at bill.updated_at

json.patient bill.patient.full_name
json.samples_count bill.samples.count
