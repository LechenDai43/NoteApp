-- starting ------------------------------------------------------------------------------------------------------------
use noteapp;
-- end -----------------------------------------------------------------------------------------------------------------

-- normal indexing -----------------------------------------------------------------------------------------------------
create table if not exists indexing_z (
-- this table is for character from 65-122
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_a (
-- this table is for character from 19968-21487
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_b (
-- this table is for character from 21488-24358
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_c (
-- this table is for character from 24359-26539
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_d (
-- this table is for character from 26539-30446
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_e (
-- this table is for character from 30447-34382
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_f (
-- this table is for character from 34383-40959
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci not null
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
-- end -----------------------------------------------------------------------------------------------------------------