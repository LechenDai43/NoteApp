-- for the whole database ----------------------------------------------------------------------------------------------
drop database if exists noteapp;
create database if not exists noteapp character set utf8 collate utf8_general_ci;
use noteapp;
-- end -----------------------------------------------------------------------------------------------------------------

-- the main tables -----------------------------------------------------------------------------------------------------
create table if not exists articles (
    id int not null auto_increment,
    title varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    class enum('note', 'record', 'entry') not null,
    primary key (id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table articles add constraint articles_key1 unique (title, class);

create table if not exists tags (
    id int not null,
    tag varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table tags add constraint tags_key1 unique (id, tag);
alter table tags add constraint tags_key2 foreign key (id) references articles(id);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about notes --------------------------------------------------------------------------------------------------
create table if not exists notes (
    note_id int not null auto_increment,
    id int not null,
    note varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    summary varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (note_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table notes add constraint notes_key1 unique (note);
alter table notes add constraint notes_key2 unique (summary);
alter table notes add constraint notes_key3 foreign key (id) references articles(id);

create table if not exists note_comments (
    comment_id int not null auto_increment,
    note_id int not null,
    comment text CHARACTER SET utf8 COLLATE utf8_general_ci not null not null,
    primary key (comment_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table note_comments add constraint note_comments_key1 foreign key (note_id) references notes(note_id);

create table if not exists note_cues (
    cue_id int not null auto_increment,
    note_id int not null,
    cue varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (cue_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table note_cues add constraint note_cues_key1 foreign key (note_id) references notes(note_id);
alter table note_cues add constraint note_cues_key2 unique (note_id, cue);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about task records -------------------------------------------------------------------------------------------
create table if not exists records (
    record_id int not null auto_increment,
    id int not null,
    task varchar(100) not null,
    summary varchar(100) not null,
    primary key (record_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table records add constraint records_key1 foreign key (id) references articles(id);
alter table records add constraint records_key2 unique key (task);
alter table records add constraint records_key3 unique key (summary);

create table if not exists record_thoughts (
    thought_id int not null auto_increment,
    record_id int not null,
    thought varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (thought_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table record_thoughts add constraint record_thoughts_key1 foreign key (record_id) references records(record_id);
alter table record_thoughts add constraint record_thoughts_key2 unique (thought);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about wiki entries -------------------------------------------------------------------------------------------
create table if not exists entries (
    entry_id int not null auto_increment,
    id int not null,
    introduction varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (entry_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entries add constraint entries_key1 foreign key (id) references articles(id);
alter table entries add constraint entries_key2 unique (introduction);

create table if not exists entry_sections (
    entry_id int not null,
    sect varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    content varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entry_sections add constraint entry_sections_key1 foreign key (entry_id) references entries(entry_id);
alter table entry_sections add constraint entry_sections_key2 unique (content);

create table if not exists entry_references (
    entry_id int not null,
    reference text not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entry_references add constraint entry_references_key1 foreign key (entry_id) references entries(entry_id);
-- end -----------------------------------------------------------------------------------------------------------------