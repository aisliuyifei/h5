class CreatePageTemplates < ActiveRecord::Migration
  def change
    create_table :page_templates do |t|
      t.string :name
      t.text :content

      t.timestamps
    end
  end
end
