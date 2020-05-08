# frozen_string_literal: true

json.partial! 'api/patients/patient', patient: @patient
json.samples @patient.samples.take(3)
