import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        table.string('ong_id').notNullable();
        
        table.foreign('ong_id').references('id').inTable('ongs');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('incidents');
}

