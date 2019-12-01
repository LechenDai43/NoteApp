-- starting ------------------------------------------------------------------------------------------------------------
use noteapp;
-- end -----------------------------------------------------------------------------------------------------------------

-- normal indexing -----------------------------------------------------------------------------------------------------
create table if not exists indexing_e (
-- this table is for character before 0x4e00
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_a (
-- this table is for character from 0x4e00 to 0x5fff
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_b (
-- this table is for character from 0x6000 to 0x6fff
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_c (
-- this table is for character from 0x7000 to 0x7fff
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_d (
-- this table is for character from 0x8000 to 0x8fff
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;

create table if not exists indexing_e (
-- this table is for character from 0x9000 to 0x9fff
    indexing char(4) CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    location text CHARACTER SET utf8 COLLATE utf8_general_ci not null,
    primary key(indexing)
) ENGINE INNODB  CHARACTER SET utf8 COLLATE utf8_general_ci;
-- end -----------------------------------------------------------------------------------------------------------------