# frozen_string_literal: true

5.times do |i|
  Message.create!(message: "hello word #{i}")
end
