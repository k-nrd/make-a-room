# nodejs-package

[![Node CI](https://github.com/k-onrad/make-a-room/workflows/Node%20CI/badge.svg)](https://github.com/k-onrad/make-a-room/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0b1f5e53982455d659c7/maintainability)](https://codeclimate.com/github/k-onrad/make-a-room/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0b1f5e53982455d659c7/test_coverage)](https://codeclimate.com/github/k-onrad/make-a-room/test_coverage)

## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```


## Example room
Description
```
The living room is worn and messy. It has two doors to your left.
Pizza boxes and empty beer cans litter the floor. An old sofa faces a small CRT TV, tuned to a dead channel.
The carpet is dirty and smells. A broken standing lamp has fallen to the floor.
```

Structure
```
(Room 
  (Room
    (Object Bed)
    (Object Nightstand)) 
  (Room 
    (Object Sink)
    (Object Shower)
    (Object Toilet)) 
  (Object Pizza)
  (Object Beers) 
  (Object Sofa) 
  (Object TV) 
  (Object Carpet) 
  (Object Lamp))
```
