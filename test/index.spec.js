const test = require('japa')
const { create } = require('../index')

test('can access properties', (assert) => {
  const store = create({ id: 1 })
  const computed = store.pick(['id'])
  assert.equal(computed.id(), 1)
})

test('can access getters', assert => {
  const store = create({
    id: 1,
    idAsString() {
      return this.id.toString()
    }
  })
  const computed = store.pick(['idAsString'])
  assert.equal(computed.idAsString(), '1')
})

test('can mutate state', assert => {
  const store = create({
    id: 1,
    async setId(newid) {
      this.id = newid
    }
  })

  const computed = store.pick(['id', 'setId'])
  computed.setId(10)
  assert.equal(computed.id(), 10)
})