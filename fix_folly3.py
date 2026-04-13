
# Fix folly/Memory.h to include aligned_free
memory_stub = """#pragma once
#include <memory>
#include <cstdlib>
#include <cmath>
namespace folly {
inline void aligned_free(void* p) noexcept { ::free(p); }
inline void* aligned_malloc(size_t size, size_t align) {
  void* p = nullptr;
  ::posix_memalign(&p, align, size);
  return p;
}
using std::nextafter;
} // namespace folly
"""
with open('ios/Pods/RCT-Folly/folly/Memory.h', 'w') as f:
    f.write(memory_stub)
print('Updated Memory.h')

# Also add nextafter to Portability.h (for Conv.h)
portability_addition = """
// Stub: nextafter in folly namespace
#ifndef FOLLY_NEXTAFTER_DEFINED
#define FOLLY_NEXTAFTER_DEFINED
#include <cmath>
namespace folly {
using std::nextafter;
} // namespace folly
#endif
"""
with open('ios/Pods/RCT-Folly/folly/Portability.h', 'a') as f:
    f.write(portability_addition)
print('Updated Portability.h with nextafter')
print('Done')
