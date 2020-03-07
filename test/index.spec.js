const test = require('japa')
const { create } = require('../index')

test('can access properties', (assert) => {
  const store = create({ id: 1 })
  const res = store.map('id')
  assert.equal(res.computed.id(), 1)
  assert.equal(store.state.id, 1)
})

test('can access getters', assert => {
  const store = create({
    id: 1,
    get idAsString() {
      return this.id.toString()
    }
  })
  const res = store.map('idAsString')
  assert.equal(res.computed.idAsString(), '1')
  assert.equal(store.state.idAsString, '1')
})

test('can access getters within other methods', assert => {
  const store = create({
    id: 1,
    get idAsString() {
      return this.id.toString()
    },
    aMethod() {
      return this.idAsString
    }
  })
  assert.equal(store.state.aMethod(), '1')
})

test('can mutate state', assert => {
  const store = create({
    id: 1,
    async setId(newid) {
      this.id = newid
    }
  })

  const res = store.map('id', 'setId')
  res.methods.setId(10)
  assert.equal(res.computed.id(), 10)
  assert.equal(store.state.id, 10)
})