stub = """#pragma once
#include <utility>
#include <new>
namespace folly {
template <typename T>
class Indestructible {
 public:
  template <typename... Args>
  explicit Indestructible(Args&&... args) {
    new (&storage_) T(std::forward<Args>(args)...);
  }
  Indestructible() { new (&storage_) T(); }
  T* get() { return reinterpret_cast<T*>(&storage_); }
  const T* get() const { return reinterpret_cast<const T*>(&storage_); }
  T& operator*() & { return *get(); }
  const T& operator*() const& { return *get(); }
  T* operator->() { return get(); }
  const T* operator->() const { return get(); }
  operator T&() { return *get(); }
  operator const T&() const { return *get(); }
 private:
  alignas(T) unsigned char storage_[sizeof(T)];
};
} // namespace folly
"""
with open('ios/Pods/RCT-Folly/folly/Indestructible.h', 'w') as f:
    f.write(stub)
print('Done')
