// HYWAY Utils
const test_scenarios = scenarios => {}
const map_reduce = (array = [], reducer = item => ({[item]: true})) => array.reduce((map, item) => ({ ...map, ...(reducer(item) || {})}), {})

// Type Insurance
const NATIVE_TYPES = ['undefined', 'object', 'string', 'number', 'boolean']
const TYPE_MAP = map_reduce(NATIVE_TYPES, type => ({[type]: false}))
const REGISTERED_TYPES_MAP = {}

const feature_is = test_scenarios([
  () => {
    is('hello').type.string
    insure('hello').type.string
  }
]))

const chain = value => ({
  equal: other_value => value === other_value
})

const is = value => ({ 
  type: { ...TYPE_MAP, [typeof value]: true },
  equal: { to: chain(value).equal },
  like: () => ({})
})

const insure = value => ({
  type: { ...TYPE_MAP, [typeof value]: value }
})

const register_type = (key, model) => {
  REGISTERED_TYPES_MAP[key] = model
}
