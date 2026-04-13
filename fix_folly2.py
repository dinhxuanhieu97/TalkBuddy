
# Inject constexpr_strlen into folly/Traits.h (which Range.h includes)
# so it's visible at template definition point

inject = """
// Stub: constexpr_strlen (from folly/ConstexprMath.h, injected for Range.h)
#ifndef FOLLY_CONSTEXPR_STRLEN_DEFINED
#define FOLLY_CONSTEXPR_STRLEN_DEFINED
#include <cstddef>
namespace folly {
constexpr size_t constexpr_strlen(const char* s) noexcept {
  size_t n = 0;
  while (s[n] != '\\0') { ++n; }
  return n;
}
} // namespace folly
using folly::constexpr_strlen;
#endif
"""

for path in [
    'ios/Pods/RCT-Folly/folly/Traits.h',
    'ios/Pods/RCT-Folly/folly/detail/RangeCommon.h',
]:
    with open(path, 'a') as f:
        f.write(inject)
    print(f'Injected into {path}')

print('Done')
