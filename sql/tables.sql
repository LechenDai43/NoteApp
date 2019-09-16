-- for the whole database ----------------------------------------------------------------------------------------------
drop database if exists noteapp;
create database if not exists noteapp character set utf8 collate utf8_general_ci;
use noteapp;
-- end -----------------------------------------------------------------------------------------------------------------

-- the main tables -----------------------------------------------------------------------------------------------------
create table if not exists articles (
    id int not null auto_increment,
    title varchar(100) not null,
    class enum('note', 'record', 'entry', 'analysis') not null,
    primary key (id)
);

create table if not exists tags (
    id int not null,
    tag varchar(50) not null
);
alter table tags add constraint tags_key1 unique (id, tag);
alter table tags add constraint tags_key2 foreign key (id) references articles(id);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about notes --------------------------------------------------------------------------------------------------
create table if not exists notes (
    note_id int not null auto_increment,
    id int not null,
    note varchar(100) not null,
    summary varchar(100) not null,
    source varchar(150) not null,
    primary key (note_id)
);
alter table notes add constraint notes_key1 unique (note);
alter table notes add constraint notes_key2 unique (summary);
alter table notes add constraint notes_key3 foreign key (id) references articles(id);

create table if not exists note_comments (
    note_id int not null,
    comment text not null
);
alter table note_comments add constraint note_comments_key1 foreign key (note_id) references notes(note_id);

create table if not exists note_cues (
    note_id int not null,
    cue varchar(200) not null
);
alter table note_cues add constraint note_cues_key1 foreign key (note_id) references notes(note_id);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about task records -------------------------------------------------------------------------------------------
create table if not exists records (
    record_id int not null auto_increment,
    id int not null,
    task varchar(100) not null,
    summary varchar(100) not null,
    primary key (record_id)
);
alter table records add constraint records_key1 foreign key (id) references articles(id);
alter table records add constraint records_key2 unique key (task);
alter table records add constraint records_key3 unique key (summary);

create table if not exists record_thoughts (
    thought_id int not null auto_increment,
    record_id int not null,
    thought varchar(100) not null,
    primary key (thought_id)
);
alter table record_thoughts add constraint record_thoughts_key1 foreign key (record_id) references records(record_id);
alter table record_thoughts add constraint record_thoughts_key2 unique (thought);

create table if not exists record_process (
    thought_id int not null,
    process varchar(100) not null,
    reflection varchar(100) not null
);
alter table record_process add constraint record_process_key1 foreign key (thought_id) references record_thoughts(thought_id);
alter table record_process add constraint record_process_key2 unique (process);
alter table record_process add constraint record_process_key3 unique (reflection);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about wiki entries -------------------------------------------------------------------------------------------
create table if not exists entries (
    entry_id int not null auto_increment,
    id int not null,
    introduction varchar(100) not null,
    primary key (entry_id)
);
alter table entries add constraint entries_key1 foreign key (id) references articles(id);
alter table entries add constraint entries_key2 unique (introduction);

create table if not exists alias (
    entry_id int not null,
    alias varchar(200)
);
alter table alias add constraint alias_key1 foreign key (entry_id) references entries(entry_id);
alter table alias add constraint alias_key2 unique (entry_id, alias);

create table if not exists entry_sections (
    entry_id int not null,
    sect varchar(200) not null,
    content varchar(100) not null
);
alter table entry_sections add constraint entry_sections_key1 foreign key (entry_id) references entries(entry_id);
alter table entry_sections add constraint entry_sections_key2 unique (content);

create table if not exists entry_references (
    entry_id int not null,
    reference varchar(200) not null
);
alter table entry_references add constraint entry_references_key1 foreign key (entry_id) references entries(entry_id);

create table if not exists entry_relatives (
    entry_id int not null,
    relative_id int not null
);
alter table entry_relatives add constraint entry_relatives_key1 foreign key (entry_id) references entries(entry_id);
alter table entry_relatives add constraint entry_relatives_key2 foreign key (relative_id) references entries(entry_id);
-- end -----------------------------------------------------------------------------------------------------------------

-- tables about analysis -----------------------------------------------------------------------------------------------
create table if not exists analysises (
    analysis_id int not null auto_increment,
    id int not null,
    sample varchar(100) not null,
    primary key (analysis_id)
);
alter table analysises add constraint analysises_key1 foreign key (id) references articles(id);
alter table analysises add constraint analysises_key2 unique (sample);

create table if not exists analysis_views (
    analysis_id int not null,
    ana_view varchar(100) not null,
    reflection varchar(100) not null
);
alter table analysis_views add constraint analysis_views_key1 foreign key (analysis_id) references analysises(analysis_id);
alter table analysis_views add constraint analysis_views_key2 unique (ana_view);
alter table analysis_views add constraint analysis_views_key3 unique (reflection);
-- end -----------------------------------------------------------------------------------------------------------------