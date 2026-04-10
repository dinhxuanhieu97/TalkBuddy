
# Fix Asm.h to provide asm_volatile_pause
asm_stub = """#pragma once
namespace folly {
#if defined(__x86_64__) || defined(__i386__)
inline void asm_volatile_pause() { asm volatile("pause"); }
#elif defined(__arm__) || defined(__aarch64__)
inline void asm_volatile_pause() { asm volatile("yield"); }
#else
inline void asm_volatile_pause() {}
#endif
} // namespace folly
using folly::asm_volatile_pause;
"""
with open('ios/Pods/RCT-Folly/folly/portability/Asm.h', 'w') as f:
    f.write(asm_stub)
print('Updated Asm.h')

# Also fix Builtins.h to provide common builtins
builtins_stub = """#pragma once
namespace folly {
inline int popcount(unsigned int x) { return __builtin_popcount(x); }
inline int popcountll(unsigned long long x) { return __builtin_popcountll(x); }
} // namespace folly
"""
with open('ios/Pods/RCT-Folly/folly/portability/Builtins.h', 'w') as f:
    f.write(builtins_stub)
print('Updated Builtins.h')
print('Done')
