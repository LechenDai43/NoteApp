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
    tag_id int not null auto_increment,
    tag varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (tag_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table tags add constraint tags_key1 unique (tag);

create table if not exists tag_ref (
    tag_id int not null,
    article_id int not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table tag_ref add constraint tag_ref_key1 unique (tag_id, article_id);
alter table tag_ref add constraint tag_ref_key2 foreign key (article_id) references articles(id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table tag_ref add constraint tag_ref_key3 foreign key (tag_id) references tags(tag_id) ON DELETE CASCADE ON UPDATE CASCADE;
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about notes --------------------------------------------------------------------------------------------------
-- each note has 1 + 1 + n files
-- one content file
-- one summary file
-- n comment files
create table if not exists notes (
    note_id int not null auto_increment,
    id int not null,
    note varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    summary varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (note_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table notes add constraint notes_key1 unique (note);
alter table notes add constraint notes_key2 unique (summary);
alter table notes add constraint notes_key3 foreign key (id) references articles(id) ON DELETE CASCADE ON UPDATE CASCADE;

create table if not exists note_comments (
    comment_id int not null auto_increment,
    note_id int not null,
    comment varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (comment_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table note_comments add constraint note_comments_key1 foreign key (note_id) references notes(note_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table note_comments add constraint note_comments_key2 unique (comment);

create table if not exists note_cues (
    cue_id int not null auto_increment,
    cue varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (cue_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table note_cues add constraint note_cues_key1 unique (cue);

create table if not exists cue_ref (
    cue_id int not null,
    note_id int not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table cue_ref add constraint cue_ref_key1 unique (cue_id, note_id);
alter table cue_ref add constraint cue_ref_key2 foreign key (note_id) references notes(note_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table cue_ref add constraint cue_ref_key3 foreign key (cue_id) references note_cues(cue_id) ON DELETE CASCADE ON UPDATE CASCADE;

-- end -----------------------------------------------------------------------------------------------------------------

-- tables about task records -------------------------------------------------------------------------------------------
-- each record has 1 + n + 1 files
-- one detail file
-- n plans files
-- one summary file
create table if not exists records (
    record_id int not null auto_increment,
    id int not null,
    task varchar(100) not null,
    summary varchar(100) not null,
    primary key (record_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table records add constraint records_key1 foreign key (id) references articles(id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table records add constraint records_key2 unique key (task);
alter table records add constraint records_key3 unique key (summary);

create table if not exists record_thoughts (
    thought_id int not null auto_increment,
    record_id int not null,
    thought varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (thought_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table record_thoughts add constraint record_thoughts_key1 foreign key (record_id) references records(record_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table record_thoughts add constraint record_thoughts_key2 unique (thought);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about wiki entries -------------------------------------------------------------------------------------------
-- each entry has 1 + n files
-- one introduction file
-- n subsection files
create table if not exists entries (
    entry_id int not null auto_increment,
    id int not null,
    introduction varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key (entry_id)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entries add constraint entries_key1 foreign key (id) references articles(id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table entries add constraint entries_key2 unique (introduction);

create table if not exists entry_sections (
    entry_id int not null,
    sect varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    content varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entry_sections add constraint entry_sections_key1 foreign key (entry_id) references entries(entry_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table entry_sections add constraint entry_sections_key2 unique (content);

create table if not exists entry_references (
    entry_id int not null,
    reference text not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
alter table entry_references add constraint entry_references_key1 foreign key (entry_id) references entries(entry_id) ON DELETE CASCADE ON UPDATE CASCADE;
-- end -----------------------------------------------------------------------------------------------------------------