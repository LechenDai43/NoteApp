use noteapp;

-- ---------------------------------------------------------------------------------------------------------------------
create table if not exists collections (
    user_id int not null,
    collection_id int not null auto_incremnt,
    title varchar(200) not null,
    primary key (collection_id)
);
alter table collections add constraint collections_key1 unique (user_id, title);
alter table collections add constraint collections_key2 foreign key (user_id) references users(id);
-- end -----------------------------------------------------------------------------------------------------------------