
# Fix Time.h: force FOLLY_HAVE_CLOCK_GETTIME=1 on Apple to avoid clockid_t redefinition
with open('ios/Pods/RCT-Folly/folly/portability/Time.h', 'r') as f:
    content = f.read()

# Force FOLLY_HAVE_CLOCK_GETTIME on all Apple platforms, not just those with __CLOCK_AVAILABILITY
old = '#if defined(__MACH__) && defined(__CLOCK_AVAILABILITY)'
new = '#if defined(__MACH__)'
content = content.replace(old, new)

with open('ios/Pods/RCT-Folly/folly/portability/Time.h', 'w') as f:
    f.write(content)
print('Fixed Time.h')

# Fix SysUio.h to define kIovMax
sysuio = """#pragma once
#include <sys/uio.h>
#include <climits>
namespace folly {
#if defined(IOV_MAX)
constexpr size_t kIovMax = IOV_MAX;
#else
constexpr size_t kIovMax = 1024;
#endif
} // namespace folly
"""
with open('ios/Pods/RCT-Folly/folly/portability/SysUio.h', 'w') as f:
    f.write(sysuio)
print('Fixed SysUio.h')
print('Done')
